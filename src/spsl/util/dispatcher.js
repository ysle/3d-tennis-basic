import { EventEmitter } from 'eventemitter3'
import { default as debug, logLevel, prefix } from './debug'

export default class Dispatcher extends EventEmitter {
	static get verboseLogEvents() {
		return this.verboseEvents || []
	}

	static set verboseLogEvents(events) {
		this.verboseEvents = events
	}

	constructor(debugPrefix) {
		super()
		this._debug = debugPrefix ? prefix(debugPrefix) : debug
		this._active = true
		this.addEventListener = this.addListener
	}

	emit(eventName, data = null) {
		if (!this._active) return
		if ((logLevel === 1 && !Dispatcher.verboseLogEvents.includes(eventName)) || logLevel >= 2) {
			const out = [`~ ${eventName} `]
			data !== null && out.push(data)
			this._debug(...out)
		}
		super.emit(eventName, data)
	}

	destroy() {
		this.emit('destroy')
		this._active = false
	}
}
