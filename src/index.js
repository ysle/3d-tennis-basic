import './style.css'
document.title = `${import.meta.env.VITE_APP_NAME} v.${import.meta.env.VITE_APP_VERSION}`

import { scene } from './3d'
import * as THREE from 'three'

const grid = new THREE.GridHelper(200, 200, '#222', '#111')
grid.position.y = -0.1
scene.add(grid)

const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 2), new THREE.MeshStandardMaterial({ color: '#cf0', wireframe: false }))
ball.castShadow = true
scene.add(ball)

const court = new THREE.Mesh(new THREE.PlaneGeometry(11.89 * 2, 10.97), new THREE.MeshStandardMaterial({ color: '#0a0' }))
court.rotateX(-Math.PI / 2)
court.receiveShadow = true
scene.add(court)

const padding = 3
const field = new THREE.Mesh(new THREE.PlaneGeometry(11.89 * 2 + padding, 10.97 + padding), new THREE.MeshStandardMaterial({ color: '#030' }))
field.rotateX(-Math.PI / 2)
field.position.setY(-0.05)
field.receiveShadow = true
scene.add(field)

const net = new THREE.Mesh(new THREE.PlaneGeometry(0.91, 10.97 + padding / 2, 9, 110), new THREE.MeshStandardMaterial({ color: '#eee', side: THREE.DoubleSide, wireframe: true }))
net.position.setY(0.91 / 2)
net.rotateZ(Math.PI / 2)
net.rotateX(Math.PI / 2)
net.castShadow = true
scene.add(net)

// !options

import { Pane } from 'tweakpane'
const options = {
	clay: ['#FFA500', '#FF8C00'], // orange full
	grass: ['#0a0', '#050'], // green both
	hard: ['#314f67', '#4794c7'], // blue
	carpet: ['#5c8543', '#a23729'] // green + red
}
const params = { surface: 'hard' }
const pane = new Pane()
const look = pane.addFolder({ title: 'court type' })
look.addInput(params, 'surface', { options })

const updateColors = ({ value: [courtColor, fieldColor] }) => {
	court.material.color.set(courtColor)
	field.material.color.set(fieldColor)
}

pane.on('change', updateColors)
updateColors({ value: options.clay })

// ! data

import pos from './pos.json'

let i = 0
const delay = ms => new Promise(r => setTimeout(r, ms))
const tick = async () => {
	i++
	if (i > pos.length) i = 1
	if (pos[i]) ball.position.set(pos[i][0], pos[i][2], pos[i][1])
	window.requestAnimationFrame(tick)
}
tick()
