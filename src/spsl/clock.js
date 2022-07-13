import Dispatcher from './util/dispatcher'

export default class Clock extends Dispatcher {
	constructor() {
		super('clock')
		this._id = Math.random()
		this._currentTime = 0
		this.playbackRate = 1
		this._lastTick = 0
		this._paused = false
		this._firstTick = false
		this.tick()
	}

	play() {
		if (this._paused) {
			this._paused = false
			this.emit('play')
		}
	}

	pause() {
		if (!this._paused) {
			this._paused = true
			this.emit('pause')
		}
	}

	tick(ts = 0) {
		if (!this._active) return

		if (ts && !this._firstTick) {
			this._firstTick = ts
		} else {
			ts -= this._firstTick
		}

		if (!this._paused) {
			const delta = ts - this._lastTick
			this._currentTime += (delta / 1000) * this.playbackRate
			this.emit('timeupdate', this._currentTime)
		}

		this._lastTick = ts
		window.requestAnimationFrame(this.tick.bind(this))
	}

	get currentTime() {
		return this._currentTime
	}

	set currentTime(time) {
		this._currentTime = time
	}

	get paused() {
		return this._paused
	}
}
