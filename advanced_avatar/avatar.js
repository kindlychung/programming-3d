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

// Build as many arms and legs as we want
function limb() {
  var limb = new THREE.Object3D();

  var leg_arm_shape = new THREE.CylinderGeometry(10, 10, 100);
  var leg_arm = new THREE.Mesh(leg_arm_shape, material);
  leg_arm.position.y = -50;
  limb.add(leg_arm);

  var foot_hand_shape = new THREE.SphereGeometry(30);
  var foot_hand = new THREE.Mesh(foot_hand_shape, material);
  foot_hand.position.y = -100;
  limb.add(foot_hand);

  return limb;
}

// Right leg
var right_leg = limb();
right_leg.position.x = -40;
right_leg.position.y = -75;
scene.add(right_leg);

// Left leg
var left_leg = limb();
left_leg.position.x = 40;
left_leg.position.y = -75;
scene.add(left_leg);

// Right arm
var right_arm = limb();
right_arm.position.x = -40;
right_arm.rotation.z = -0.75 * Math.PI;
scene.add(right_arm);

// Left arm
var left_arm = limb();
left_arm.position.x = 40;
left_arm.rotation.z = 0.75 * Math.PI;
scene.add(left_arm);

// Render again with the head and body
renderer.render(scene, camera);
