import * as THREE from 'three'

const getRibbonEdges = (a, b, w = 10) => {
	const normal = new THREE.Vector3().subVectors(b, a).normalize()
	let yAxis = new THREE.Vector3(0, 1, 0)
	let scale = new THREE.Vector3(w, 0, w)

	const l = new THREE.Vector3()
		.copy(normal)
		.multiply(scale)
		.applyAxisAngle(yAxis, Math.PI / 2)
		.add(b)

	const r = new THREE.Vector3()
		.copy(normal)
		.multiply(scale)
		.applyAxisAngle(yAxis, Math.PI / -2)
		.add(b)

	return [l, r]
}

export default class Ribbon extends THREE.Mesh {
	//

	constructor(cfg = {}) {
		super(
			new THREE.BufferGeometry(),
			new THREE.MeshBasicMaterial({
				side: THREE.DoubleSide
			})
		)

		this.vertices = new Float32Array()
		this.indices = new Uint32Array()
		this.width = cfg.width != undefined ? cfg.width : 1
		this.maxLength = cfg.maxLength || 100
		this.color = new THREE.Color(cfg.color).toArray() || [1, 1, 1]

		if (cfg.vertexColors) {
			this.material.vertexColors = cfg.vertexColors
			this.colors = new Float32Array((this.color.join(',') + ',').repeat(this.maxLength).split(','))
		} else if (cfg.color) {
			this.material.color = new THREE.Color(cfg.color)
		}

		if (cfg.uv) {
			this.uvs = new Float32Array(new Array(this.maxLength * 2))

			for (let i = 0; i < this.uvs.length; i += 4) {
				let y = 1 - i / this.uvs.length
				this.uvs.set([0, y, 1, y], i)
			}

			this.geometry.setAttribute('uv', new THREE.BufferAttribute(this.uvs, 2))

			// this.material.depthWrite = false
			// this.material.depthTest = false
			// this.material.dithering = true
			// this.material.needsUpdate = true
		}

		this.lastVertex = null
	}

	move(vertex, cfg = {}) {
		// add new vertices and the vertex color

		if (this.vertices.length < this.maxLength * 6) {
			const current = this.vertices
			this.vertices = new Float32Array(current.length + 6)
			this.vertices.set(current, 6)
		} else {
			this.vertices.copyWithin(6)
		}

		const w = cfg.width != undefined ? cfg.width : this.width

		if (this.lastVertex) {
			const [l, r] = getRibbonEdges(this.lastVertex, vertex, w)
			this.vertices.set(l.toArray())
			this.vertices.set(r.toArray(), 3)
		} else {
			this.vertices.set(vertex.toArray())
			this.vertices.set(vertex.toArray(), 3)
		}

		if (this.colors) {
			const c = cfg.color != undefined ? cfg.color : this.color
			this.colors.copyWithin(6)
			this.colors.set([...c, ...c].flat())
		}

		// add new indices

		if (this.vertices.length >= 12) {
			if (this.indices.length < this.maxLength * 3) {
				const current = this.indices
				this.indices = new Uint32Array(current.length + 6)
				this.indices.set(current)

				const i = (this.indices.length / 6 - 1) * 2
				this.indices.set(
					[
						[i, i + 1, i + 3],
						[i, i + 3, i + 2]
					].flat(),
					this.indices.length - 6
				)
			}
		}

		this.updateGeometry()
		this.lastVertex = vertex
	}

	updateGeometry() {
		this.geometry.setIndex(new THREE.BufferAttribute(this.indices, 3))
		this.geometry.setAttribute('position', new THREE.BufferAttribute(this.vertices, 3))
		this.geometry.attributes.position.needsUpdate = true
		if (this.colors) {
			this.geometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3))
			this.geometry.attributes.color.needsUpdate = true
		}
	}

	clear() {
		this.lastVertex = null
		this.vertices = new Float32Array()
		this.indices = new Uint32Array()
	}
}
