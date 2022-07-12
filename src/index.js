import './style.css'
import { scene, controls } from './3d'
import * as THREE from 'three'

const grid = new THREE.GridHelper(200, 200, '#222', '#111')
grid.position.y = -0.1
scene.add(grid)

const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.1, 2), new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: false }))
ball.position.setY(1)
ball.castShadow = true
scene.add(ball)

const plane = new THREE.Mesh(new THREE.PlaneGeometry(11.89 * 2, 10.97), new THREE.MeshStandardMaterial({ color: 0x00ff00 }))
plane.rotateX(-Math.PI / 2)
plane.receiveShadow = true
scene.add(plane)

const net = new THREE.Mesh(new THREE.PlaneGeometry(0.91, 10.97, 10, 100), new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, wireframe: true }))
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
	if (!pos[i]) return
	await delay(30)
	pos[i] = [pos[i][0], pos[i][2], pos[i][1]]
	ball.position.set(...pos[i])
	i++
	window.requestAnimationFrame(tick)
}
tick()
