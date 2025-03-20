// Simple JavaScript for the hair stylist website
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading screen after a short delay
    setTimeout(() => {
        const loadingScreen = document.querySelector('.loading-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.visibility = 'hidden';
        }
    }, 1500);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
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
                this.classList.add('active');
            }
        });
    });

    // Service card hover effects
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards) {
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px)';
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
                const button = this.querySelector('.btn');
                if (button) button.style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
                const button = this.querySelector('.btn');
                if (button) button.style.transform = 'scale(1)';
            });
        });
    }

    // Portfolio image hover effects
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    if (portfolioItems) {
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                const overlay = this.querySelector('.portfolio-overlay');
                if (overlay) overlay.style.opacity = '1';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                const overlay = this.querySelector('.portfolio-overlay');
                if (overlay) overlay.style.opacity = '0';
            });
        });
    }

    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let valid = true;
            const name = this.querySelector('#name');
            const email = this.querySelector('#email');
            const message = this.querySelector('#message');
            
            if (!name.value.trim()) {
                valid = false;
                name.classList.add('error');
            } else {
                name.classList.remove('error');
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                valid = false;
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }
            
            if (!message.value.trim()) {
                valid = false;
                message.classList.add('error');
            } else {
                message.classList.remove('error');
            }
            
            if (valid) {
                // In a real implementation, this would submit the form
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
        });
    }

    // Helper function to validate email
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Initialize services section with image-based cards
    initServices();

    // Initialize portfolio section with image gallery
    initPortfolio();
});

// Initialize services section with image-based cards
function initServices() {
    const servicesContainer = document.querySelector('.services-container');
    if (!servicesContainer) return;
    
    servicesContainer.innerHTML = ''; // Clear placeholder
    
    // Service data
    const services = [
        {
            title: 'Haircut & Styling',
            description: 'Precision cuts and styling tailored to your face shape and lifestyle.',
            image: 'images/service-haircut.jpg',
            color: '#415441' // Primary color
        },
        {
            title: 'Color & Highlights',
            description: 'From subtle highlights to bold transformations, our color specialists create stunning results.',
            image: 'images/service-color.jpg',
            color: '#DACBAE' // Secondary color
        },
        {
            title: 'Hair Treatments',
            description: 'Rejuvenating treatments to restore health and shine to damaged hair.',
            image: 'images/service-treatment.jpg',
            color: '#3d3d33' // Accent color
        },
        {
            title: 'Extensions & Texturing',
            description: 'Add length, volume, or texture with our professional extension and texturing services.',
            image: 'images/service-extensions.jpg',
            color: '#415441' // Primary color
        }
    ];
    
    // Create service cards
    services.forEach(service => {
        // Create service card
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'service-image';
        imageContainer.style.backgroundColor = service.color;
        
        // Create image placeholder (in a real implementation, this would be a real image)
        const imagePlaceholder = document.createElement('div');
        imagePlaceholder.className = 'image-placeholder';
        imagePlaceholder.textContent = service.title;
        imagePlaceholder.style.backgroundColor = service.color;
        imageContainer.appendChild(imagePlaceholder);
        
        serviceCard.appendChild(imageContainer);
        
        // Create content container
        const contentDiv = document.createElement('div');
        contentDiv.className = 'service-content';
        
        // Add title
        const title = document.createElement('h3');
        title.textContent = service.title;
        title.style.color = service.color;
        contentDiv.appendChild(title);
        
        // Add description
        const description = document.createElement('p');
        description.textContent = service.description;
        contentDiv.appendChild(description);
        
        // Add button
        const button = document.createElement('a');
        button.href = '#booking';
        button.className = 'btn';
        button.textContent = 'Book Now';
        button.style.backgroundColor = service.color;
        contentDiv.appendChild(button);
        
        serviceCard.appendChild(contentDiv);
        servicesContainer.appendChild(serviceCard);
    });
}

// Initialize portfolio section with image gallery
function initPortfolio() {
    const portfolioContainer = document.querySelector('.portfolio-container');
    if (!portfolioContainer) return;
    
    
    // Portfolio data
    const portfolioItems = [
        {
            title: 'Trim Haircut',
            category: 'Haircut',
            image: 'images/trim-hair-cut.webp',
            color: '#415441' // Primary color
        },
        {
            title: 'Balayage Highlights',
            category: 'Color',
            image: 'images/Portrait.jpg',
            color: '#DACBAE' // Secondary color
        },
        {
            title: 'Elegant Updo',
            category: 'Styling',
            image: 'images/frenchtwist_recirc-4957fbd132c447a982e984378e9bdd49.jpg',
            color: '#3d3d33' // Accent color
        },
        {
            title: 'Styling',
            category: 'Haircut',
            image: 'images/Styling.jpg',
            color: '#415441' // Primary color
        },
        {
            title: 'Vibrant Pink Color',
            category: 'Color',
            image: 'images/Coloring.png',
            color: '#DACBAE' // Secondary color
        },
        {
            title: 'Smooth Sleek Hair',
            category: 'Styling',
            image: 'images/Highlights.jpg',
            color: '#3d3d33' // Accent color
        }
    ];
    
    // Create portfolio gallery
    const galleryDiv = document.createElement('div');
    galleryDiv.className = 'portfolio-gallery';
    
    portfolioItems.forEach(item => {
        // Create portfolio item
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        
        // Create image using the actual image path
        const portfolioImage = document.createElement('img');
        portfolioImage.src = item.image;
        portfolioImage.alt = item.title;
        portfolioImage.className = 'portfolio-image';
        portfolioItem.appendChild(portfolioImage);
        
        // Create overlay that's always visible
        const overlay = document.createElement('div');
        overlay.className = 'portfolio-overlay always-visible';
        
        const itemTitle = document.createElement('h3');
        itemTitle.textContent = item.title;
        overlay.appendChild(itemTitle);
        
        const itemCategory = document.createElement('p');
        itemCategory.textContent = item.category;
        overlay.appendChild(itemCategory);
        
        portfolioItem.appendChild(overlay);
        galleryDiv.appendChild(portfolioItem);
    });
    
    portfolioContainer.appendChild(galleryDiv);
}
