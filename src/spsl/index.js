import Dispatcher from './util/dispatcher'
Dispatcher.verboseLogEvents = ['timeupdate']

import Clock from './clock'

export default class extends Dispatcher {
	constructor(clock = new Clock()) {
		super('core')
		this._debug('init', { v: import.meta.env.SNOWPACK_PUBLIC_VERSION })

		this.models = new Set()

		this.clock = clock
		clock.addEventListener('timeupdate', () => this.models.forEach(model => !model.passive && model.tick(clock.currentTime)))
	}

	get meta() {
		const output = {}
		this.models.forEach(model => {
			if (model.key) {
				const data = model.getData(model._lastDataKey)
				if (model.subKey) {
					if (!output[model.key]) output[model.key] = {}
					output[model.key][model.subKey] = data
				} else {
					output[model.key] = data
				}
			}
		})
		return output
	}

	subscribe(...models) {
		models = models.filter(model => !this.models.has(model))
		models.forEach(model => this.models.add(model))
		return models
	}

	unsubscribe(...models) {
		models.filter(model => this.models.has(model)).forEach(model => this.models.delete(model))
	}

	destroy() {
		this.clock.pause()
		this.clock.destroy && this.clock.destroy()

		this.models.forEach(model => model.destroy())
		this.models.clear()

		super.destroy()
	}
}
