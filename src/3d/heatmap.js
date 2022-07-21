import simpleheat from 'simpleheat'
export default class Heatmap {
	constructor(width, height) {
		this.canvas = document.createElement('canvas')
		this.canvas.width = width
		this.canvas.height = height
		this.map = simpleheat(this.canvas)
	}
}
