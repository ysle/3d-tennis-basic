import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

export const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true
// renderer.shadowMap.type = THREE.PCFSoftShadowMap
document.body.appendChild(renderer.domElement)

const stats = Stats()
stats.dom.id = 'stats'
document.body.appendChild(stats.dom)

export const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.set(30, 30, 30)

export const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.autoRotate = true
controls.autoRotateSpeed = 1
controls.maxPolarAngle = Math.PI / 2 - 0.03
controls.maxDistance = 30

export const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0, 40, 80)

export const light = new THREE.DirectionalLight()
light.shadow.mapSize.width = light.shadow.mapSize.height = 2048
light.position.set(20, 20, 20)
light.castShadow = true
scene.add(light)

const shadowSize = 10
light.shadow.camera.top = shadowSize
light.shadow.camera.bottom = -shadowSize
light.shadow.camera.left = -shadowSize * 2
light.shadow.camera.right = shadowSize * 2

export const helper = new THREE.CameraHelper(light.shadow.camera)
helper.visible = false
scene.add(helper)

export const ambient = new THREE.AmbientLight(0x404040)
scene.add(ambient)

const resize = () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', resize)
resize()

const render = () => {
	window.requestAnimationFrame(render)
	controls.update()
	renderer.render(scene, camera)
	stats.update()
}
render()
