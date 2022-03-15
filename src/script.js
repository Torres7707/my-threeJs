import './style.css';
import * as THREE from 'three';
import { getDefaultCompilerOptions } from 'typescript';

// Scene
const scene = new THREE.Scene();

// Object
const group = new THREE.Group();
group.position.y = 1;
// group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

const cube1 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 'red' })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 'green' })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
	new THREE.BoxGeometry(1, 1, 1),
	new THREE.MeshBasicMaterial({ color: 'blue' })
);
cube3.position.x = 2;
group.add(cube3);

// Axes Helper
const axesHelper = new THREE.AxisHelper(2);
scene.add(axesHelper);

// Sizes
const sizes = {
	width: 800,
	height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// lookAt
// camera.lookAt(mesh.position);

// Renderer
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('canvas.webgl'),
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
