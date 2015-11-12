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

// The display engine
var renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Something to cover shapes
var material = new THREE.MeshNormalMaterial({});

// The avatar
var avatar = new THREE.Object3D();
scene.add(avatar);
avatar.add(camera);

// The head
var head_shape = new THREE.SphereGeometry(100);
var head = new THREE.Mesh(head_shape, material);
avatar.add(head);

// Right hand
var right_hand_shape = new THREE.SphereGeometry(50);
var right_hand = new THREE.Mesh(right_hand_shape, material);
right_hand.position.x = 150;
avatar.add(right_hand);

// Left hand
var left_hand_shape = new THREE.SphereGeometry(50);
var left_hand = new THREE.Mesh(left_hand_shape, material);
left_hand.position.x = -150;
avatar.add(left_hand);

// Right foot
var right_foot_shape = new THREE.SphereGeometry(50);
var right_foot = new THREE.Mesh(right_foot_shape, material);
right_foot.position.y = -125;
right_foot.position.x = 75;
avatar.add(right_foot);

// Left foot
var left_foot_shape = new THREE.SphereGeometry(50);
var left_foot = new THREE.Mesh(left_foot_shape, material);
left_foot.position.y = -125;
left_foot.position.x = -75;
avatar.add(left_foot);

function buildTree(x, z) {
  var tree = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 20, 100),
    new THREE.MeshBasicMaterial({color: 0xA0522D})
  );
  tree.position.x = x;
  tree.position.z = z;

  var top = new THREE.Mesh(
    new THREE.SphereGeometry(100),
    new THREE.MeshBasicMaterial({color: 0x228B22})
  );
  top.position.y = 125;
  tree.add(top);

  return tree;
}

scene.add(buildTree(0, 350));
scene.add(buildTree(0, -350));
scene.add(buildTree(-200, 350));
scene.add(buildTree(-200, -350));

// Render the scene
renderer.render(scene, camera);

// Movement controls
var controls = new THREE.FirstPersonControls(avatar);
controls.movementSpeed = 100;
controls.activeLook = false;

var clock = new THREE.Clock(true);

function animate() {
  requestAnimationFrame(animate);
  walk();
  render();
}

function render() {
  renderer.render(scene, camera);
  controls.update(clock.getDelta());
}

function walk() {
  if (!isWalking()) return;

  var position = Math.sin(clock.getElapsedTime()*5) * 50;
  right_hand.position.z = position;
  left_hand.position.z = -position;
  right_foot.position.z = -position;
  left_foot.position.z = position;
}

function isWalking() {
  if (controls.moveForward) return true;
  if (controls.moveBackward) return true;
  if (controls.moveRight) return true;
  if (controls.moveLeft) return true;

  return false;
}

animate();
