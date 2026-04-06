(function () {
  var container = document.getElementById('threeContainer');
  if (!container) return;

  var width = container.clientWidth;
  var height = container.clientHeight;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
  camera.position.set(0, 0, 4.5);

  var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // Lights
  scene.add(new THREE.AmbientLight(0x8892b0, 0.6));
  var pl1 = new THREE.PointLight(0x64ffda, 3, 12);
  pl1.position.set(3, 3, 4);
  scene.add(pl1);
  var pl2 = new THREE.PointLight(0x6366f1, 2, 12);
  pl2.position.set(-3, -2, 3);
  scene.add(pl2);

  // Main group (draggable)
  var group = new THREE.Group();

  // Icosahedron
  var geo = new THREE.IcosahedronGeometry(1.3, 1);
  var mat = new THREE.MeshStandardMaterial({
    color: 0x112240, metalness: 0.35, roughness: 0.35, flatShading: true
  });
  var mesh = new THREE.Mesh(geo, mat);
  group.add(mesh);

  // Wireframe overlay
  var wireGeo = new THREE.IcosahedronGeometry(1.32, 1);
  var wireMat = new THREE.MeshBasicMaterial({
    color: 0x64ffda, wireframe: true, transparent: true, opacity: 0.2
  });
  var wireMesh = new THREE.Mesh(wireGeo, wireMat);
  group.add(wireMesh);

  // Outer ring
  var ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.9, 0.015, 16, 80),
    new THREE.MeshBasicMaterial({ color: 0x64ffda, transparent: true, opacity: 0.25 })
  );
  ring.rotation.x = Math.PI / 2.5;
  group.add(ring);

  // Second ring
  var ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(2.1, 0.01, 16, 80),
    new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.15 })
  );
  ring2.rotation.x = Math.PI / 1.8;
  ring2.rotation.y = Math.PI / 4;
  group.add(ring2);

  scene.add(group);

  // Particles
  var pCount = 60;
  var pGeo = new THREE.BufferGeometry();
  var positions = new Float32Array(pCount * 3);
  for (var i = 0; i < pCount * 3; i++) positions[i] = (Math.random() - 0.5) * 6;
  pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  var particles = new THREE.Points(pGeo, new THREE.PointsMaterial({
    color: 0x64ffda, size: 0.025, transparent: true, opacity: 0.5
  }));
  scene.add(particles);

  // ====== DRAG INTERACTION ======
  var raycaster = new THREE.Raycaster();
  var mouse = new THREE.Vector2();
  var dragPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  var isDragging = false;
  var dragOffset = new THREE.Vector3();
  var intersection = new THREE.Vector3();

  // Use a larger invisible sphere for easier grabbing
  var hitSphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.5, 16, 16),
    new THREE.MeshBasicMaterial({ visible: false })
  );
  group.add(hitSphere);

  function getMouseVec(e) {
    var rect = container.getBoundingClientRect();
    var clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
    var clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
    mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  }

  function onDown(e) {
    getMouseVec(e);
    raycaster.setFromCamera(mouse, camera);
    var hits = raycaster.intersectObject(hitSphere);
    if (hits.length > 0) {
      isDragging = true;
      autoRotate = false;
      dragPlane.setFromNormalAndCoplanarPoint(
        camera.getWorldDirection(new THREE.Vector3()).negate(),
        group.position
      );
      raycaster.ray.intersectPlane(dragPlane, intersection);
      dragOffset.subVectors(group.position, intersection);
      container.style.cursor = 'grabbing';
    }
  }

  function onMove(e) {
    getMouseVec(e);
    if (isDragging) {
      raycaster.setFromCamera(mouse, camera);
      raycaster.ray.intersectPlane(dragPlane, intersection);
      group.position.copy(intersection.add(dragOffset));
    } else {
      raycaster.setFromCamera(mouse, camera);
      var hits = raycaster.intersectObject(hitSphere);
      container.style.cursor = hits.length > 0 ? 'grab' : 'default';
    }
  }

  function onUp() {
    if (isDragging) {
      isDragging = false;
      autoRotate = true;
      container.style.cursor = 'default';
      // Smooth return to center
      returnToCenter = true;
    }
  }

  container.addEventListener('mousedown', onDown);
  container.addEventListener('mousemove', onMove);
  container.addEventListener('mouseup', onUp);
  container.addEventListener('mouseleave', onUp);
  container.addEventListener('touchstart', function (e) { onDown(e.touches[0]); }, { passive: true });
  container.addEventListener('touchmove', function (e) { onMove(e.touches[0]); }, { passive: true });
  container.addEventListener('touchend', onUp);

  // Mouse tracking for lights
  var globalMouseX = 0, globalMouseY = 0;
  document.addEventListener('mousemove', function (e) {
    globalMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    globalMouseY = (e.clientY / window.innerHeight) * 2 - 1;
  });

  // Animate
  var clock = new THREE.Clock();
  var autoRotate = true;
  var returnToCenter = false;

  function animate() {
    requestAnimationFrame(animate);
    var t = clock.getElapsedTime();

    // Auto rotation
    if (autoRotate) {
      mesh.rotation.y += 0.003;
      wireMesh.rotation.y += 0.003;
    }

    // Rings orbit
    ring.rotation.z = t * 0.3;
    ring2.rotation.z = -t * 0.2;

    // Floating
    if (!isDragging) {
      group.position.y += (Math.sin(t * 0.6) * 0.06 - group.position.y + (returnToCenter ? 0 : group.position.y)) * 0.02;
    }

    // Smooth return to center after drag
    if (returnToCenter && !isDragging) {
      group.position.x += (0 - group.position.x) * 0.05;
      group.position.y += (0 - group.position.y) * 0.05;
      if (Math.abs(group.position.x) < 0.01 && Math.abs(group.position.y) < 0.01) {
        returnToCenter = false;
      }
    }

    // Light follows mouse
    pl1.position.x = 3 + globalMouseX * 2;
    pl1.position.y = 3 - globalMouseY * 2;

    // Particles
    particles.rotation.y += 0.0005;
    particles.rotation.x += 0.0003;

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', function () {
    var w = container.clientWidth;
    var h = container.clientHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
})();
