const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const kartNameElement = document.getElementById('kart-name');
const kartImageElement = document.getElementById('kart-image');
const kartInfoContainer = document.getElementById('kart-info');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scene, camera, renderer;

// Function to initialize the game
function initGame() {
    // Setup Three.js
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Placeholder for game objects
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }
    animate();
}

// Function to parse URL parameters
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        kart: params.get('kart') || '',
    };
}

// Function to display Kart information
function displayKartInfo(kartName, kartImageSrc) {
    kartNameElement.textContent = kartName;
    kartImageElement.src = kartImageSrc;
    kartInfoContainer.classList.remove('hidden');
}

// Handle start button click
startButton.addEventListener('click', () => {
    // Hide menu
    document.getElementById('menu').style.display = 'none';

    // Initialize game
    initGame();
});

// Handle window resizing
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Get Kart Code from URL
const params = getQueryParams();
const kartCode = params.kart;

// Kart mappings
const karts = {
    'SK': { name: 'Standard Kart', image: 'KartSelect/Karts/SK.png' },
    'PF': { name: 'Pipe Frame', image: 'KartSelect/Karts/PF.png' },
    'M8': { name: 'Mach 8', image: 'KartSelect/Karts/M8.png' },
    'SD': { name: 'Steel Driver', image: 'KartSelect/Karts/SD.png' },
    'GSK': { name: 'Gold Standard Kart', image: 'KartSelect/Karts/GSK.png' },
    'KCK': { name: 'Koopa Clown Kart', image: 'KartSelect/Karts/KCK.png' },
    'SB': { name: 'Standard Bike', image: 'KartSelect/Karts/SB.png' },
    'TD': { name: 'The Duke', image: 'KartSelect/Karts/TD.png' },
    'CT': { name: 'City Tripper', image: 'KartSelect/Karts/CT.png' }
};

// Display Kart info if valid
if (kartCode && karts[kartCode]) {
    const kart = karts[kartCode];
    displayKartInfo(kart.name, kart.image);
}
