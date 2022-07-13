let debug = () => {}
export let logLevel

export const init = () => {
	let debugValue = window.localStorage && window.localStorage.getItem('debug')

	logLevel = debugValue === 'enabled' ? 1 : Number(debugValue) ? Number(debugValue) : 0
	try {
		if (logLevel > 0) {
			debug = function (...args) {
				let prompt = ['%c[SPSL]', 'color: royalblue;']
				args[0].prefix && (prompt[0] += ' ' + args.shift().prefix)
				console.log(...prompt, ...args)
			}
		}
	} catch (e) {
		console.log(e)
	}
	return debug
}

export const prefix = prefix => {
	if (logLevel <= 0) {
		return debug
	} else {
		return (...args) => debug({ prefix }, ...args)
	}
}

init()

export default debug
