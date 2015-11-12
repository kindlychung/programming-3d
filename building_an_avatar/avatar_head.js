/***
 * Excerpted from "3D Game Programming for Kids",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/csjava for more book information.
***/
// The game area
var scene = new THREE.Scene();

// The camera
var aspect_ratio = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect_ratio, 1, 10000);
camera.position.z = 500;
scene.add(camera);

// The display engine
var renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Something to cover shapes
var material = new THREE.MeshNormalMaterial({});

// The head
var head_shape = new THREE.SphereGeometry(100);
var head = new THREE.Mesh(head_shape, material);
scene.add(head);

// Render the scene
renderer.render(scene, camera);
