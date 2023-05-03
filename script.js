// const scene = new THREE.Scene()
// // Red cube
// const geometry = new THREE.BoxGeometry(1,1,1)
// const material = new THREE.MeshBasicMaterial({color: 0xff0000})
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// // Size
// const size = {
//     width: 800,
//     height: 600
// }
// // Camera
// const camera = new THREE.PerspectiveCamera(75, size.width / size.height) // 75 is a degree of view of camera && 
// scene.add(camera)
// camera.position.z = 3
// const canvas = document.querySelector('.webgl')
// const renderer = new THREE.WebGLRenderer({
//     canvas
// })
// renderer.setSize(size.width, size.height)
// renderer.render(scene, camera)

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)
const size = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, size.width/size.height )
scene.add(camera)
camera.position.z = 3
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(size.width, size.height)
renderer.render(scene, camera)