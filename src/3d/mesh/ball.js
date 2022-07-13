import * as THREE from 'three'
import Mesh from './index'
import Ribbon from './ribbon'

export default class extends Mesh {
	constructor() {
		super()
		this._mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 2), new THREE.MeshStandardMaterial({ color: '#cf0' }))
		this._mesh.castShadow = true

		this.ribbon = new Ribbon()
		this.add(this.ribbon)
		this.add(this._mesh)
	}

	move(x, y, z) {
		this.position.set(x, y, z)
		this.ribbon.move(x, y, z)
		this.ribbon.position.set(-x, -y, -z)
	}
}
