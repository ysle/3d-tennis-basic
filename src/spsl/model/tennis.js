import Model from '.'

export default class TennisModel extends Model {
	constructor() {
		super({ fps: 1 / 50, prefix: 'tennis', appendBuffer: 0 })
	}

	preload(data) {
		data.forEach((d, i) => this.setData(i, d))
	}
}
