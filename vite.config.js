/* eslint-env node */

import { defineConfig } from 'vite'
import { name, version } from './package.json'

process.env.VITE_APP_NAME = name
process.env.VITE_APP_VERSION = version

// https://vitejs.dev/config/
export default defineConfig({
	base: `/${name}/`,
	build: {
		outDir: 'docs'
	},
	server: {
		https: true,
		open: true
	}
})
