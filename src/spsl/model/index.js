import Dispatcher from '../util/dispatcher'

export default class Model extends Dispatcher {
	constructor({ fps, uuid, prefix, offset, preloadBuffer, appendBuffer, passive }) {
		super(prefix)
		this.uuid = uuid
		this.passive = passive
		this.fps = fps === undefined ? 1 / 50 : fps
		this._offset = offset || 0
		this.frame = 0
		this._frames2 = new Array()
		this.preloadBuffer = preloadBuffer || 1 // ms
		this.appendBuffer = appendBuffer || 10 // ms
		this._loading = false
		this._lastDataKey = undefined
		this._preloadMinThreshold = (1 / this.fps) * this.appendBuffer
	}

	set offset(value) {
		this._offset = value
		this._frames2 = new Array()
	}

	get offset() {
		return this._offset
	}

	async preload() {
		console.log('LOAD - preload')
		return this.load(this._offset, (1 / this.fps) * this.preloadBuffer)
	}

	async load(from, cnt) {
		this._loading = true
		if (from !== undefined && cnt !== undefined) {
			// mark frames loading
			for (let i = from - this._offset; i < from + cnt - this._offset; i++) {
				if (!this._frames2[i]) this._frames2[i] = { loading: true }
			}
		}
		this.emit('load', { from, cnt })
		const start = new Date().getTime()

		return this.fetch(from, cnt).then(res => {
			// backfill empty frames
			for (let i = from - this._offset; i < from + cnt - this._offset; i++) {
				if (this._frames2[i] && this._frames2[i].loading) {
					this._frames2[i] = {
						empty: 1,
						data: null
					}
				}
			}

			this._loading = false
			this.emit('loaded', {
				time: `${new Date().getTime() - start} ms`,
				from,
				cnt
			})
			return res
		})
	}

	fetch() {
		return Promise.resolve()
	}

	decorate(frame) {
		return frame
	}

	getFrame(key) {
		if (this.passive) {
			return this._frames2.find(f => f.ts === key)
		}

		return this._frames2[key - this._offset]
	}

	getData(key) {
		const frame = this.getFrame(key)
		return frame ? frame.data : undefined
	}

	setData(key, data) {
		if (this.passive) {
			this._frames2.push({ ts: key, data })
		} else {
			this._frames2[key - this._offset] = { data }
		}
	}

	get size() {
		return this._frames2.length
	}

	tick(ct) {
		if (!this._active) return
		let needTick = false
		if (this.fps) {
			// get frame number for the streamed models
			this.frame = Math.floor(ct / this.fps) + this._offset
			needTick = this.frame !== this.lastTickFrame
			this.lastTickFrame = this.frame
			if (needTick) {
				// this.emit('tick', { frame: this.frame, ct })
				const frame = this.getFrame(this.frame)
				if (frame && frame.data) {
					this.emit('data', { ct, frame: this.frame, data: frame.data })
					this._lastDataKey = this.frame
				}

				// if no data or cache < preloadMinThreshold, load more frames
				if (!this._loading && !this.passive) {
					if (!frame || (!frame.data && !frame.empty)) {
						console.log('LOAD - missing data')
						this.load(this.frame, (1 / this.fps) * this.appendBuffer)
					} else {
						// check if array length is smaller than current + _preloadMinThreshold
						const frameIndex = this.frame - this._offset
						const framesPuffer = this._frames2.length - frameIndex
						if (framesPuffer < this._preloadMinThreshold) {
							// console.log('LOAD - basic prefetch based on frame length only', framesPuffer)
							this.load(this.frame + framesPuffer, this._preloadMinThreshold)
						} else {
							// check if here are any empty frames in the buffer ahead in the preloadMinThreshold range.
							const emptyIndex = this._frames2.slice(frameIndex + 1, frameIndex + this._preloadMinThreshold + 1).findIndex(f => Object.is(f, undefined))
							// console.log('LOAD - CHECK ahead frames in range', frameIndex, emptyIndex)
							if (emptyIndex !== -1) {
								// console.log('LOAD - prefetch as there is an empty frame at', frameIndex + 1 + emptyIndex + this._offset)
								this.load(this.frame + 1 + emptyIndex, this._preloadMinThreshold)
								// } else {
								// console.log('LOAD - all good, skip')
							}
						}
					}
				}
			}
		} else if (!ct) {
			// static tick based on timestamp
			const ts = new Date().getTime()
			this.emit('tick ', { ts })
			return this.load(ts).then(data => {
				this.setData(ts, data)
				if (data) {
					this.emit('data', { ts, data })
					this._lastDataKey = ts
				}
				return data
			})
		}
		return needTick
	}

	purge() {
		this._frames2 = []
		this.emit('purge')
	}

	destroy() {
		this._frames2 = null
		super.destroy()
	}
}
