import * as THREE from 'three'
import Mesh from './index'
import Ribbon from './ribbon'

const radius = 0.2

export default class extends Mesh {
	constructor() {
		super()
		this._mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(radius, 2), new THREE.MeshStandardMaterial({ color: '#cf0' }))
		this._mesh.castShadow = true

		this.ribbon = new Ribbon({
			width: 0.1,
			uv: true
			// color: '#cf0'
		})

		this.ribbon.material.alphaMap = new THREE.TextureLoader().load('./alpha2.png')
		this.ribbon.material.transparent = true

		this.add(this.ribbon)
		this.add(this._mesh)
	}

	move(x, y, z) {
		this.position.set(x, y, z)
		this.ribbon.move(new THREE.Vector3(x, y, z))
		this.ribbon.position.set(-x, -y, -z)
	}
}
