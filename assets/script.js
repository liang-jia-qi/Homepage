// script.js

// Expandable project cards
function toggleProject(card) {
  card.classList.toggle("expanded");
}

// Three.js Earth Globe Animation (elegant, tech-feel)
window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("earth-canvas");
  if (!canvas || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const globe = new THREE.Mesh(
    new THREE.SphereGeometry(5, 64, 64),
    new THREE.MeshStandardMaterial({
      color: 0x7fa5a8,
      roughness: 0.4,
      metalness: 0.3,
      wireframe: true,
      transparent: true,
      opacity: 0.8
    })
  );
  scene.add(globe);

  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(5.1, 64, 64),
    new THREE.MeshBasicMaterial({
      color: 0x7fa5a8,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.2
    })
  );
  scene.add(atmosphere);

  const light = new THREE.PointLight(0xffffff, 1.2);
  light.position.set(10, 20, 10);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    globe.rotation.y += 0.0015;
    atmosphere.rotation.y += 0.001;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});

