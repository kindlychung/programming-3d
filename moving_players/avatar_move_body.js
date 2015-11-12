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

// Right hand
var right_hand_shape = new THREE.SphereGeometry(50);
var right_hand = new THREE.Mesh(right_hand_shape, material);
right_hand.position.x = 150;
scene.add(right_hand);

// Left hand
var left_hand_shape = new THREE.SphereGeometry(50);
var left_hand = new THREE.Mesh(left_hand_shape, material);
left_hand.position.x = -150;
scene.add(left_hand);

// Right foot
var right_foot_shape = new THREE.SphereGeometry(50);
var right_foot = new THREE.Mesh(right_foot_shape, material);
right_foot.position.y = -125;
right_foot.position.x = 75;
scene.add(right_foot);

// Left foot
var left_foot_shape = new THREE.SphereGeometry(50);
var left_foot = new THREE.Mesh(left_foot_shape, material);
left_foot.position.y = -125;
left_foot.position.x = -75;
scene.add(left_foot);

// Render the scene
renderer.render(scene, camera);

// Movement controls
var controls = new THREE.FirstPersonControls(head);
controls.movementSpeed = 100;
controls.activeLook = false;

// Animate the screen
function animate() {
  requestAnimationFrame(animate);
  controls.update(clock.getDelta());
  render();
}

// A clock to keep track of how much time passes
// between drawings
var clock = new THREE.Clock(true);

// Draw the scene with updates
function render() {
  renderer.render(scene, camera);
}

// Start the animation
animate();
