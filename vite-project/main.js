import "./style.css";

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AmbientLight, DirectionalLight, PointLight, PointLightHelper } from "three";

// Super cool: https://stackoverflow.com/questions/47626301/how-to-move-multiple-objects-after-scene-addobject

const randomSize = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Setup a simple demo scene
var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(
  40,
  innerWidth / innerHeight,
  0.1,
  maxDist
);
var renderer = new THREE.WebGLRenderer({ antialias: true });
scene.background = new THREE.Color("#0b1f38");
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);
// STore our cubes somewhere, dist for random generation and clipping
const controls = new OrbitControls(cam, renderer.domElement);
var cubes = [],
  maxDist = 500,
  r = Math.random,
  materials = [];
for (var i = 0; i < 50; i++)
  materials.push(
    new THREE.MeshBasicMaterial({
      color: ((r() * 0xffffff) & 0xffffff) | 0x999999,
    })
  );

// Add and store some cubes
for (i = 0; i < 750; i++) {
  var cube = new THREE.Mesh(
    new THREE.BoxGeometry(
      randomSize(10, 15),
      randomSize(10, 15),
      randomSize(5, 100)
    ),
    materials[i % materials.length]
  );
  cubes.push(cube); // store to our array

  cube.position.set(
    r() * maxDist * 2 - maxDist,
    r() * maxDist * 2 - maxDist,
    r() * maxDist * 2 - maxDist
  ); // random positions
}
scene.add(...cubes); //es6, add to scene
cam.position.z = maxDist;



/* const pointLight = new PointLight();
pointLight.position.set(1, 100, -1000);
pointLight.intensity = 1;
scene.add(pointLight);

const helper = new PointLightHelper(pointLight);
scene.add(helper); */

const ambiantLight = new AmbientLight("#eb4034", 0);
scene.add(ambiantLight);

/* const directionalLight = new DirectionalLight();
directionalLight.position.set(300,0,500)
scene.add(directionalLight);
const helper = new THREE.DirectionalLightHelper( directionalLight, 5 );
scene.add( helper ); */
// Animate cubes
const loop = (time) => {
  for (i = 0, cube; i < cubes.length; i++) {
    // for each cube do:
    cube = cubes[i];
    cube.position.y += 0; // move on Z in this demo
    //cube.position.z -= 10; // move on Z in this demo
    cube.position.z += 10; // move on Z in this demo

    cube.position.x += 0; // move on Z in this demo
    if (cube.position.x > maxDist) cube.position.x = -maxDist; // reset position for demo

    if (cube.position.y > maxDist) cube.position.y = -maxDist; // reset position for demo
    //if (cube.position.z < -maxDist) cube.position.z = maxDist;  // reset position for demo
    if (cube.position.z > maxDist) cube.position.z = -maxDist; // reset position for demo
  }

  renderer.render(scene, cam); // render everything
  requestAnimationFrame(loop);
};

renderer.render(scene, cam); // render everything
requestAnimationFrame(loop);
