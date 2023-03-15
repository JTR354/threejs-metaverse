import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/**
 * 1. 场景 scene
 * 2. 相机 camera
 * 3. 模型 mesh
 * 4. 灯光 light
 * 5. 渲染器 renderer
 */

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.01,
  500
);
const renderer = new THREE.WebGLRenderer();

// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

const controls = new OrbitControls(camera, renderer.domElement);

const gltfLoader = new GLTFLoader();

const ambientLight = new THREE.AmbientLight(0xaaaaaa);

const directLight = new THREE.DirectionalLight(0xffffff);

scene.background = new THREE.Color(66, 66, 66);

scene.add(directLight);

scene.add(ambientLight);

gltfLoader.load("scene.glb", (gltf) => {
  scene.add(gltf.scene);
});

renderer.setSize(window.innerWidth, window.innerHeight);

// scene.add(boxMesh);

camera.position.set(20, 10, 20);

document.body.appendChild(renderer.domElement);

animate();

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  controls.update();
}
