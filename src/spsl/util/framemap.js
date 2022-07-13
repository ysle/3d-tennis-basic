const CanvasLite = class {
	constructor(element) {
		this.element = element
		this.pixelRatio = window.devicePixelRatio || 1
		this._width = 100
		this._height = 100
		this.ctx = element.getContext('2d')
	}

	set width(value) {
		this._width = value * this.pixelRatio
	}

	get width() {
		return this._width / this.pixelRatio
	}

	set height(value) {
		this._height = value * this.pixelRatio
	}

	get height() {
		return this._height / this.pixelRatio
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height)
	}

	drawRect(x, y, w, h, color) {
		this.ctx.fillStyle = color
		this.ctx.fillRect(x, y, w, h)
	}

	createGradient(x, y, c1, c2) {
		const gradient = this.ctx.createLinearGradient(0, 0, x, y)
		gradient.addColorStop(0, c1)
		gradient.addColorStop(1, c2)
		return gradient
	}

	resize(w, h) {
		this.width = w
		this.element.width = this._width
		this.element.style.width = `${w}px`

		this.height = h
		this.element.height = this._height
		this.element.style.height = `${h}px`

		this.ctx.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0)
	}
}

export default class FrameMap {
	constructor(model, canvasElement, size = 10) {
		this._size = size
		this._padding = 1
		this._space = this._size + this._padding

		this._canvas = new CanvasLite(canvasElement)
		this._canvas.resize(this._space, this._space)

		this.palettes = {
			empty: ['#000', '#111'],
			data: ['#080', '#060'],
			loading: ['#0803', '#0603']
		}

		Object.entries(this.palettes).forEach(([name, colors]) => {
			let gradient = this._canvas.createGradient(this._size, this._size, ...colors)
			this._canvas.drawRect(0, 0, this._size, this._size, gradient)
			this.palettes[name] = this._canvas.ctx.getImageData(
				0,
				0,
				this._size * this._canvas.pixelRatio,
				this._size * this._canvas.pixelRatio
			)
			this._canvas.clear()
		})

		this._model = model
		this._model.on('data', this.update, this)
		this._model.on('tick', this.update, this)
		this._model.on('purge', this.update, this)
		this._model.on('load', this.resize, this)
		this._model.on('loaded', this.resize, this)

		this.maxDotPerLine = 0

		window.addEventListener('resize', this.resize.bind(this), false)
		this.resize()
	}

	update() {
		this._canvas.clear()

		let x = 0
		let y = 0
		let frame
		let palette

		for (let i = 0; i < this._model._frames2.length; i++) {
			frame = this._model._frames2[i]
			x = i % this.maxDotPerLine
			y = Math.floor(i / this.maxDotPerLine)

			if (this._model.lastTickFrame === i + this._model.offset)
				this._canvas.drawRect(
					x * this._space,
					y * this._space,
					this._size + this._padding * 2,
					this._size + this._padding * 2,
					'#fff'
				)

			if (frame) {
				if (frame.loading) {
					palette = 'loading'
				} else if (frame.empty) {
					palette = 'empty'
				} else if (frame.data) {
					palette = 'data'
				}
			} else {
				palette = 'empty'
			}

			this._canvas.ctx.putImageData(
				this.palettes[palette],
				x * this._space * this._canvas.pixelRatio + this._padding * this._canvas.pixelRatio,
				y * this._space * this._canvas.pixelRatio + this._padding * this._canvas.pixelRatio
			)

			if (this._model.frame === i + this._model.offset) {
				// mark actual frame
			}
		}
	}

	resize() {
		const width = this._canvas.element.parentElement.clientWidth
		this.maxDotPerLine = Math.floor(width / this._space)
		const linesNeeded = Math.floor(this._model.size / this.maxDotPerLine) + 1
		this._canvas.resize(width, linesNeeded * this._space + this._padding)
		this.update()
	}
}
