// Import Three.js from CDN in HTML

// Global variables
let scene, camera, renderer;
let heroCanvas, heroScene, heroCamera;
let servicesScene, servicesCamera;
let portfolioScene, portfolioCamera;
let clock = new THREE.Clock();
let mixer;
let particles = [];

// Initialize the application when the window loads
window.addEventListener('load', () => {
    // Hide loading screen after a short delay
    setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        document.querySelector('.loading-screen').style.visibility = 'hidden';
    }, 1500);
    
    // Initialize Three.js scenes
    initHeroScene();
    initServicesScene();
    initPortfolioScene();
    
    // Start animation loop
    animate();
});

// Initialize the hero section scene
function initHeroScene() {
    heroCanvas = document.getElementById('hero-canvas');
    
    // Create scene
    heroScene = new THREE.Scene();
    
    // Create camera
    heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    heroCamera.position.z = 5;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({
        canvas: heroCanvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    heroScene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 5);
    heroScene.add(directionalLight);
    
    // Create particles for background effect
    createParticles();
    
    // Add floating hair style models
    createFloatingHairModels();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        heroCamera.aspect = window.innerWidth / window.innerHeight;
        heroCamera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Create particles for the hero background
function createParticles() {
    // Create particle geometry
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    
    const color1 = new THREE.Color(0x8e6c88); // Primary color
    const color2 = new THREE.Color(0xd4af7a); // Secondary color
    const color3 = new THREE.Color(0x4a6670); // Accent color
    
    for (let i = 0; i < particleCount; i++) {
        // Position
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
        
        // Color - randomly choose between the three brand colors
        let colorChoice = Math.floor(Math.random() * 3);
        let particleColor;
        
        if (colorChoice === 0) particleColor = color1;
        else if (colorChoice === 1) particleColor = color2;
        else particleColor = color3;
        
        colors[i * 3] = particleColor.r;
        colors[i * 3 + 1] = particleColor.g;
        colors[i * 3 + 2] = particleColor.b;
        
        // Size
        sizes[i] = Math.random() * 0.1 + 0.05;
        
        // Create particle object for animation
        particles.push({
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01,
                (Math.random() - 0.5) * 0.01
            ),
            index: i
        });
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create particle material
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    heroScene.add(particleSystem);
}

// Create floating hair style models
function createFloatingHairModels() {
    // For now, we'll use simple geometries as placeholders for hair models
    // In a real implementation, you would load actual 3D hair models
    
    // Create a group to hold all models
    const hairModelsGroup = new THREE.Group();
    
    // Create several "hair style" models using simple geometries
    const hairStyles = [
        createHairStyle1(),
        createHairStyle2(),
        createHairStyle3()
    ];
    
    // Position the hair styles around the scene
    hairStyles[0].position.set(-3, 1, -2);
    hairStyles[1].position.set(0, -1, -3);
    hairStyles[2].position.set(3, 0.5, -4);
    
    // Add rotation animation to each hair style
    hairStyles.forEach(style => {
        style.userData.rotationSpeed = {
            x: Math.random() * 0.005,
            y: Math.random() * 0.01,
            z: Math.random() * 0.005
        };
        style.userData.floatSpeed = Math.random() * 0.002 + 0.001;
        style.userData.floatHeight = Math.random() * 0.2 + 0.1;
        style.userData.initialY = style.position.y;
        style.userData.floatOffset = Math.random() * Math.PI * 2;
        
        hairModelsGroup.add(style);
    });
    
    heroScene.add(hairModelsGroup);
}

// Create hair style 1 - bob cut
function createHairStyle1() {
    const group = new THREE.Group();
    
    // Head
    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xf9d6bd });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    group.add(head);
    
    // Hair - bob cut
    const hairGeometry = new THREE.SphereGeometry(0.55, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const hairMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 0.05;
    group.add(hair);
    
    // Bangs
    const bangsGeometry = new THREE.BoxGeometry(1.1, 0.2, 0.3);
    const bangs = new THREE.Mesh(bangsGeometry, hairMaterial);
    bangs.position.set(0, 0.3, 0.4);
    bangs.rotation.x = Math.PI * 0.1;
    group.add(bangs);
    
    return group;
}

// Create hair style 2 - long wavy
function createHairStyle2() {
    const group = new THREE.Group();
    
    // Head
    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xf9d6bd });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    group.add(head);
    
    // Hair - long wavy
    const hairGeometry = new THREE.SphereGeometry(0.55, 32, 32);
    const hairMaterial = new THREE.MeshPhongMaterial({ color: 0xffd700 });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    group.add(hair);
    
    // Long hair strands
    for (let i = 0; i < 8; i++) {
        const strandGeometry = new THREE.CylinderGeometry(0.1, 0.05, 1.5, 8);
        const strand = new THREE.Mesh(strandGeometry, hairMaterial);
        strand.position.y = -0.8;
        strand.position.x = Math.sin(i / 8 * Math.PI * 2) * 0.3;
        strand.position.z = Math.cos(i / 8 * Math.PI * 2) * 0.3;
        strand.rotation.x = Math.PI * 0.1;
        group.add(strand);
    }
    
    return group;
}

// Create hair style 3 - pixie cut
function createHairStyle3() {
    const group = new THREE.Group();
    
    // Head
    const headGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color: 0xf9d6bd });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    group.add(head);
    
    // Hair - pixie cut
    const hairGeometry = new THREE.SphereGeometry(0.52, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5);
    const hairMaterial = new THREE.MeshPhongMaterial({ color: 0x2c2c2c });
    const hair = new THREE.Mesh(hairGeometry, hairMaterial);
    hair.position.y = 0.1;
    group.add(hair);
    
    // Spiky top
    for (let i = 0; i < 20; i++) {
        const spikeGeometry = new THREE.ConeGeometry(0.05, 0.2, 8);
        const spike = new THREE.Mesh(spikeGeometry, hairMaterial);
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 0.3 + 0.2;
        spike.position.set(
            Math.sin(angle) * radius,
            0.5,
            Math.cos(angle) * radius
        );
        spike.rotation.x = Math.random() * Math.PI * 0.5;
        spike.rotation.y = Math.random() * Math.PI * 2;
        spike.rotation.z = Math.random() * Math.PI * 0.5;
        group.add(spike);
    }
    
    return group;
}

// Initialize the services section scene - using the implementation from services-portfolio.js
// Initialize the portfolio section scene - using the implementation from services-portfolio.js

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    
    // Animate particles
    if (heroScene) {
        // Update particle positions
        const positions = heroScene.children[2].geometry.attributes.position.array;
        
        particles.forEach(particle => {
            const i = particle.index;
            
            positions[i * 3] += particle.velocity.x;
            positions[i * 3 + 1] += particle.velocity.y;
            positions[i * 3 + 2] += particle.velocity.z;
            
            // Reset particles that go out of bounds
            if (positions[i * 3] > 10 || positions[i * 3] < -10) {
                positions[i * 3] = (Math.random() - 0.5) * 20;
                particle.velocity.x = -particle.velocity.x;
            }
            
            if (positions[i * 3 + 1] > 10 || positions[i * 3 + 1] < -10) {
                positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
                particle.velocity.y = -particle.velocity.y;
            }
            
            if (positions[i * 3 + 2] > 5 || positions[i * 3 + 2] < -15) {
                positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
                particle.velocity.z = -particle.velocity.z;
            }
        });
        
        heroScene.children[2].geometry.attributes.position.needsUpdate = true;
        
        // Animate hair models
        if (heroScene.children[3] && heroScene.children[3].children) {
            heroScene.children[3].children.forEach(model => {
                // Rotate the model
                model.rotation.x += model.userData.rotationSpeed.x;
                model.rotation.y += model.userData.rotationSpeed.y;
                model.rotation.z += model.userData.rotationSpeed.z;
                
                // Float up and down
                const time = Date.now() * 0.001;
                model.position.y = model.userData.initialY + 
                    Math.sin(time * model.userData.floatSpeed + model.userData.floatOffset) * 
                    model.userData.floatHeight;
            });
        }
        
        // Render the scene
        renderer.render(heroScene, heroCamera);
    }
}

// Handle scroll events to trigger animations
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Animate elements based on scroll position
    // This will be expanded as we add more interactive elements
});

// Handle mouse movement for interactive effects
document.addEventListener('mousemove', (event) => {
    if (heroScene && heroCamera) {
        // Calculate mouse position in normalized device coordinates
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Move camera slightly based on mouse position for parallax effect
        gsap.to(heroCamera.position, {
            x: mouseX * 0.5,
            y: mouseY * 0.5,
            duration: 1,
            ease: 'power2.out'
        });
    }
});

// Add GSAP animation for smooth scrolling to sections
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('nav a').forEach(navLink => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
});
