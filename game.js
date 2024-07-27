document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const startButton = document.getElementById('startButton');
    const selectedCharacterElem = document.getElementById('selected-character');
    const selectedKartElem = document.getElementById('selected-kart');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const selectedCharacter = localStorage.getItem('selectedCharacter');
    const selectedKart = localStorage.getItem('selectedKart');

    if (selectedCharacter && selectedKart) {
        selectedCharacterElem.textContent = `Character: ${selectedCharacter}`;
        selectedKartElem.textContent = `Kart: ${selectedKart}`;
    }

    let scene, camera, renderer;

    function initGame() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();
    }

    startButton.addEventListener('click', () => {
        document.getElementById('menu').style.display = 'none';
        initGame();
    });

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
