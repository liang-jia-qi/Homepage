// script.js

// Expandable project cards (for other pages)
function toggleProject(card) {
  card.classList.toggle("expanded");
}

// Optional: Basic Three.js animation setup for #earth-canvas
// This assumes three.js is included elsewhere
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("earth-canvas");
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.SphereGeometry(5, 32, 32);
  const material = new THREE.MeshStandardMaterial({ color: 0x7fa5a8, roughness: 0.5 });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(10, 10, 10);
  scene.add(light);

  camera.position.z = 10;

  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
