import './style.css'
document.title = `${import.meta.env.VITE_APP_NAME} v.${import.meta.env.VITE_APP_VERSION}`

import { scene, helper } from './3d'
import * as THREE from 'three'
import Ball from './3d/mesh/ball'

const size = {
	w: 11.88 * 2,
	h: 10.97,
	net: 0.91
}

const grid = new THREE.GridHelper(200, 200, '#222', '#111')
grid.position.y = -0.1
scene.add(grid)

const ball = new Ball()
scene.add(ball)

const court = new THREE.Mesh(new THREE.PlaneGeometry(size.w, size.h), new THREE.MeshStandardMaterial({ color: '#0a0' }))
court.rotateX(-Math.PI / 2)
court.receiveShadow = true
scene.add(court)

const padding = 9
const field = new THREE.Mesh(new THREE.PlaneGeometry(size.w + padding, size.h + padding), new THREE.MeshStandardMaterial({ color: '#030' }))
field.rotateX(-Math.PI / 2)
field.position.setY(-0.05)
field.receiveShadow = true
scene.add(field)

const net = new THREE.Mesh(new THREE.PlaneGeometry(size.net, size.h + size.net * 2, 9, 110), new THREE.MeshStandardMaterial({ color: '#eee', side: THREE.DoubleSide, wireframe: true }))
net.position.setY(size.net / 2)
net.rotateZ(Math.PI / 2)
net.rotateX(Math.PI / 2)
net.castShadow = true
scene.add(net)

// !lines

const material = new THREE.LineBasicMaterial({ color: '#fff' })
const drawLines = (...points) => scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points.map(([x, y]) => new THREE.Vector3(x, 0.01, y))), material))

const w2 = size.w / 2
const h2 = size.h / 2
const alley = h2 - 1.37
const service = w2 - 5.48

drawLines([w2, h2], [w2, -h2], [-w2, -h2], [-w2, h2], [w2, h2])
drawLines([w2, alley], [-w2, alley])
drawLines([w2, -alley], [-w2, -alley])
drawLines([service, 0], [-service, 0])
drawLines([service, alley], [service, -alley])
drawLines([-service, alley], [-service, -alley])

//! bounces

// const bounces = []
// class Bounce (){

// }
// const addBounce = (x,y,z) =>{

// }

// ! heatmap

const heatmapWidth = size.w + padding
const heatmapHeight = size.h + padding
const map = new THREE.Mesh(new THREE.PlaneGeometry(heatmapWidth, heatmapHeight), new THREE.MeshStandardMaterial({ transparent: true }))
map.rotateX(-Math.PI / 2)
map.position.setY(0.1)
scene.add(map)

const mapScale = 20
import Heatmap from './3d/heatmap'
const heatmap = new Heatmap(heatmapWidth * mapScale, heatmapHeight * mapScale)
map.material.map = new THREE.CanvasTexture(heatmap.canvas)

// !options

import { Pane } from 'tweakpane'

const options = {
	hard: ['#314f67', '#4794c7'], // blue
	grass: ['#0a0', '#050'], // green both
	carpet: ['#5c8543', '#a23729'], // green + red
	clay: ['#FFA500', '#FF8C00'] // orange full
}
const params = { surface: '', textured: localStorage.getItem('textured') === 'true' }
const pane = new Pane()
const look = pane.addFolder({ title: 'court type' })
look.addInput(params, 'surface', { options })

const updateColors = ({ value: [courtColor, fieldColor] }) => {
	court.material.color.set(courtColor)
	field.material.color.set(fieldColor)
}

look.on('change', updateColors)
updateColors({ value: options.hard })

const trail = pane.addFolder({ title: 'ball trail' })
trail.addInput(params, 'textured')
trail.on('change', ({ value }) => {
	localStorage.setItem('textured', value)
	ball.ribbon?.useTexture(value)
})
ball.ribbon?.useTexture(params.textured)

const helpers = pane.addFolder({ title: 'helpers' })
helpers.addInput(helper, 'visible', { label: 'light' })

// !utils

const tintBall = color => {
	ball._mesh.material.color.set(color)
	setTimeout(() => ball._mesh.material.color.set('#cf0'), 150)
}

// ! data

import Spsl from './spsl'
import Model from './spsl/model'

const spsl = new Spsl()
spsl.clock.pause()

const ballModel = new Model({ prefix: 'ball' })
const eventModel = new Model({ prefix: 'event' })

spsl.subscribe(ballModel, eventModel)

eventModel.on('data', ({ data: { event, pos } }) => {
	// console.log({ event })
	switch (event) {
		case 'Bounce': {
			tintBall('#f00')
			break
		}
		case 'Hit': {
			tintBall('#000')
			break
		}
		case 'Last':
			ball.ribbon?.clear()
			spsl.clock.currentTime = 0
			heatmap.map.clear()
			break
	}
})

ballModel.on('data', ({ data }) => {
	ball.move(...data)
	heatmap.map.add([data[0] * mapScale + heatmap.canvas.width / 2, data[2] * mapScale + heatmap.canvas.height / 2, 0.1]).draw()
	map.material.map.needsUpdate = true
})
const playerModels = []

const load = async () => {
	let data = await fetch('./data2.json').then(r => r.json())
	let i = 0
	data.forEach(d => {
		if (!d.event) ballModel.setData(i++, d.pos)
		else eventModel.setData(i, d)
	})

	let players = await fetch('./players.json').then(r => r.json())
	players.forEach((teams, t) => {
		teams.forEach((player, p) => {
			const model = new Model({ prefix: `player-${t}-${p}` })
			playerModels.push(model)
			player.forEach((d, i) => model.setData(i, d))
		})
	})

	initPlayers()
	spsl.subscribe(...playerModels)
	spsl.clock.play()
}
load()

// players

const initPlayers = () => {
	playerModels.forEach((model, t) => {
		const player = (model.player = new THREE.Group())

		const body = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.1, 1, 16), new THREE.MeshStandardMaterial({ color: t % 2 ? '#0f0' : '#ff0' }))
		const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), new THREE.MeshStandardMaterial({ color: '#eee' }))
		head.position.setY(0.75)

		player.castShadow = body.castShadow = head.castShadow = true

		scene.add(player.add(head, body))

		model.on('data', ({ data }) => player.position.set(data[0], 0.75, data[1]))
	})
}
