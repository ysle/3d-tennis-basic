import './style.css'
import { scene, controls } from './3d'
import * as THREE from 'three'

document.title = `${import.meta.env.VITE_APP_NAME} v.${import.meta.env.VITE_APP_VERSION}`

const grid = new THREE.GridHelper(200, 200, '#222', '#111')
grid.position.y = -0.1
scene.add(grid)

const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 2), new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: false }))
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

controls.target = ball.position.clone()

import pos from './pos.json'

let i = 0
const delay = ms => new Promise(r => setTimeout(r, ms))
const tick = async () => {
	if (pos[i]) {
		pos[i] = [pos[i][0], pos[i][2], pos[i][1]]
		ball.position.set(...pos[i])
		i++
		await delay(30) // big nope
	}
	window.requestAnimationFrame(tick)
}
tick()
