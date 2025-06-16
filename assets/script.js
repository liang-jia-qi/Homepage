// assets/script.js
document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('vanta-bg')) {
    VANTA.WAVES({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x111111,
      shininess: 50.0,
      waveHeight: 15.0,
      waveSpeed: 0.75,
      zoom: 0.85
    });
  }
});
