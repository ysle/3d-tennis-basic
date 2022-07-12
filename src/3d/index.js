import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'

export const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(window.devicePixelRatio)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
document.body.appendChild(renderer.domElement)

const stats = Stats()
stats.dom.id = 'stats'
document.body.appendChild(stats.dom)

export const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
camera.position.set(30, 30, 30)

export const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = controls.autoRotate = true
controls.maxPolarAngle = Math.PI / 2 - 0.03
controls.maxDistance = 30

export const scene = new THREE.Scene()
scene.fog = new THREE.Fog(0, 40, 80)

export const light = new THREE.DirectionalLight(0xffffff, 1)
light.shadow.mapSize.width = light.shadow.mapSize.height = 2048
light.position.set(10, 10, 10)
light.castShadow = true
scene.add(light)
scene.add(new THREE.DirectionalLightHelper(light))

export const ambient = new THREE.AmbientLight(0x404040)
scene.add(ambient)

const resize = () => {
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
	renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', resize)
resize()

const animate = () => {
	requestAnimationFrame(animate)
	controls.update()
	renderer.render(scene, camera)
	stats.update()
}
animate()
