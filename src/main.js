import * as THREE from "three";

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
  50
);
const renderer = new THREE.WebGLRenderer();

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);

renderer.setSize(window.innerWidth, window.innerHeight);

scene.add(boxMesh);

camera.position.set(0, 0, 5);

document.body.appendChild(renderer.domElement);
renderer.render(scene, camera);
