import * as THREE from 'three'
import { MeshLine, MeshLineMaterial } from 'three.meshline'

export default class Ribbon extends THREE.Group {
	constructor(length = 20) {
		super()
		this.length = length
		this.points = []

		this.line = new MeshLine()
		this.material = new MeshLineMaterial({
			color: 0xffffff,
			lineWidth: 0.5,
			map: new THREE.TextureLoader().load('./fire.png'),
			useMap: 1,
			depthTest: true,
			transparent: true
		})

		this.add(new THREE.Mesh(this.line, this.material))
	}

	updateGeometry() {
		if (this.points.length > this.length * 3) this.points.splice(0, this.points.length - this.length * 3)
		this.line.setPoints(this.points, p => p)
	}

	move(x, y, z) {
		this.points.push(x, y, z)
		this.updateGeometry()
	}

	clear() {
		this.points = []
		this.updateGeometry()
	}

	useTexture(value) {
		this.material.useMap = value
		this.material.lineWidth = value ? 0.5 : 0.2
	}
}
