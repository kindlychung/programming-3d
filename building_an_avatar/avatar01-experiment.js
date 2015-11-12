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
// var material = new THREE.MeshNormalMaterial();
// var material = new THREE.MeshBasicMaterial({
//   color: 0x0000bb
// });
// var material = new THREE.MeshPhongMaterial({
//   color: 0x0000bb,
//   shininess: 50
// });
var material = new THREE.MeshLambertMaterial({
  color: 0x0000bb
});


// The head
var head_shape = new THREE.SphereGeometry(75);
var head = new THREE.Mesh(head_shape, material);
head.position.y = (100 + 35) * .8;
scene.add(head);

// The body
var body_shape = new THREE.CylinderGeometry(1, 100, 100);
var body = new THREE.Mesh(body_shape, material);
scene.add(body);

// var spotLight = new THREE.SpotLight( 0xffffff, 10);
// spotLight.position.set( 50, 150, 150 );

// spotLight.castShadow = true;

// spotLight.shadowMapWidth = 1024;
// spotLight.shadowMapHeight = 1024;

// spotLight.shadowCameraNear = 500;
// spotLight.shadowCameraFar = 4000;
// spotLight.shadowCameraFov = 30;

// scene.add( spotLight );

// var directionalLight = new THREE.DirectionalLight(0xffffff, 10);
// directionalLight.position.set(50, 150, 150);
// directionalLight.target = head;
// scene.add( directionalLight );

var light = new THREE.PointLight(0xffffff, 10);
light.position.set(50, 150, 150);
scene.add(light);

// var light = new THREE.AmbientLight(0xffffff);
// scene.add(light);

// Render again with the head and body
renderer.render(scene, camera);
