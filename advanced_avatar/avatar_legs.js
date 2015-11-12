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
renderer.render(scene, camera);

// Wait until the web page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  document.body.appendChild(renderer.domElement);
});

// Something to wrap shapes in
var material = new THREE.MeshNormalMaterial({});

// The head
var head_shape = new THREE.SphereGeometry(75);
var head = new THREE.Mesh(head_shape, material);
head.position.y = 140;
scene.add(head);

// The body
var body_shape = new THREE.CylinderGeometry(1, 100, 150);
var body = new THREE.Mesh(body_shape, material);
scene.add(body);

// Right leg
var right_leg_shape = new THREE.CylinderGeometry(10, 10, 100);
var right_leg = new THREE.Mesh(right_leg_shape, material);
right_leg.position.x = -40;
right_leg.position.y = -125;
scene.add(right_leg);

// Right foot
var right_foot_shape = new THREE.SphereGeometry(30);
var right_foot = new THREE.Mesh(right_foot_shape, material);
right_foot.position.x = -40;
right_foot.position.y = -175;
scene.add(right_foot);

// Left leg
var left_leg_shape = new THREE.CylinderGeometry(10, 10, 100);
var left_leg = new THREE.Mesh(left_leg_shape, material);
left_leg.position.x = 40;
left_leg.position.y = -125;
scene.add(left_leg);

// Left foot
var left_foot_shape = new THREE.SphereGeometry(30);
var left_foot = new THREE.Mesh(left_foot_shape, material);
left_foot.position.x = 40;
left_foot.position.y = -175;
scene.add(left_foot);

// Render again with the head and body
renderer.render(scene, camera);
