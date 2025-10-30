// Page Loading
document.addEventListener('DOMContentLoaded', function() {
    // News shower animation
    newsShowerAnimation();

    // Hide loader after animation
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
    }, 2500);

    // Initialize animations
    initAnimations();
    initCountdown();
    initScrollEffects();
    initMobileMenu();
    initNewsletterForm();
// News Shower Animation
function newsShowerAnimation() {
    const topics = [
        'Technology', 'Politics', 'Farming', 'Science', 'Education', 'Entertainment', 'Social', 'Health', 'Business', 'Sports',
        'AI', 'Web Dev', 'Startups', 'Innovation', 'Research', 'Coding', 'Cloud', 'Security', 'Trends', 'Updates', 'World News',
        'Economy', 'Climate', 'Space', 'Robotics', 'Medicine', 'Finance', 'Travel', 'Food', 'Culture', 'History',
        'Mobile', 'Apps', 'Gadgets', 'Quantum', 'Energy', 'Green Tech', 'Automotive', 'Transport', 'Elections', 'Policy',
        'Agriculture', 'Biotech', 'Genetics', 'Physics', 'Chemistry', 'Astronomy', 'Mathematics', 'Startups', 'Investing', 'Markets',
        'Movies', 'Music', 'Art', 'Books', 'TV', 'Streaming', 'Gaming', 'Esports', 'Social Media', 'Influencers',
        'Mental Health', 'Fitness', 'Wellness', 'Nutrition', 'Parenting', 'Relationships', 'Community', 'Charity', 'Events', 'Opinion',
        'Analysis', 'Reports', 'Features', 'Interviews', 'Profiles', 'Trends', 'Breakthroughs', 'Discoveries', 'Updates', 'Insights',
        'Tech News', 'Science News', 'World Events', 'Local News', 'Global News', 'Innovation', 'Future', 'Development', 'Growth', 'Change',
        'Startups', 'Entrepreneurship', 'Leadership', 'Management', 'Strategy', 'Productivity', 'Remote Work', 'Collaboration', 'Teams', 'Careers',
        'Education', 'Learning', 'Schools', 'Universities', 'Online Courses', 'MOOCs', 'Scholarships', 'Research', 'Grants', 'Awards',
        'Entertainment', 'Celebrities', 'Shows', 'Concerts', 'Festivals', 'Premieres', 'Releases', 'Reviews', 'Trailers', 'Spoilers',
        'Social', 'Society', 'Culture', 'Traditions', 'Customs', 'Languages', 'Communication', 'Networking', 'Connections', 'Groups',
        'Health', 'Medicine', 'Hospitals', 'Doctors', 'Nurses', 'Treatments', 'Therapies', 'Vaccines', 'Prevention', 'Cures',
        'Business', 'Startups', 'Corporations', 'SMEs', 'Entrepreneurs', 'Investors', 'Funding', 'Mergers', 'Acquisitions', 'IPO',
        'Sports', 'Football', 'Cricket', 'Basketball', 'Tennis', 'Olympics', 'Championships', 'Leagues', 'Teams', 'Players',
        'Weather', 'Forecast', 'Storms', 'Rain', 'Sunshine', 'Snow', 'Heatwave', 'Cold', 'Seasons', 'Climate Change',
        'Travel', 'Tourism', 'Destinations', 'Hotels', 'Flights', 'Cruises', 'Road Trips', 'Adventures', 'Exploration', 'Maps',
        'Food', 'Recipes', 'Restaurants', 'Cafes', 'Bars', 'Cuisines', 'Dishes', 'Drinks', 'Snacks', 'Nutrition',
        'Finance', 'Banking', 'Loans', 'Credit', 'Investments', 'Savings', 'Insurance', 'Tax', 'Budget', 'Economics',
        'Space', 'NASA', 'ESA', 'Mars', 'Moon', 'Satellites', 'Rockets', 'Astronauts', 'Missions', 'Discoveries',
        'Robotics', 'Automation', 'AI', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'Algorithms', 'Data', 'Analytics', 'Big Data',
        'Quantum', 'Computing', 'Physics', 'Particles', 'Experiments', 'Labs', 'Research', 'Findings', 'Results', 'Publications',
        'Green Tech', 'Sustainability', 'Renewables', 'Solar', 'Wind', 'Hydro', 'Geothermal', 'Bioenergy', 'Efficiency', 'Recycling',
        'Automotive', 'Cars', 'Electric Vehicles', 'Hybrids', 'Trucks', 'Bikes', 'Public Transport', 'Infrastructure', 'Roads', 'Bridges',
        'Elections', 'Voting', 'Democracy', 'Government', 'Policy', 'Law', 'Regulation', 'Rights', 'Freedom', 'Justice',
        'Agriculture', 'Farming', 'Crops', 'Livestock', 'Soil', 'Water', 'Irrigation', 'Harvest', 'Yield', 'Sustainability',
        'Biotech', 'Genetics', 'DNA', 'Genome', 'Editing', 'CRISPR', 'Cloning', 'Stem Cells', 'Therapies', 'Treatments',
        'Physics', 'Chemistry', 'Biology', 'Earth Science', 'Geology', 'Meteorology', 'Oceanography', 'Ecology', 'Environment', 'Conservation',
        'Astronomy', 'Stars', 'Planets', 'Galaxies', 'Universe', 'Cosmos', 'Telescopes', 'Observatories', 'Space Missions', 'Astrophysics',
        'Mathematics', 'Numbers', 'Equations', 'Theorems', 'Proofs', 'Calculations', 'Statistics', 'Probability', 'Logic', 'Analysis'
    ];
    const newsRain = document.getElementById('newsRain');
    if (!newsRain) return;
    newsRain.innerHTML = '';
    const count = 300;
    // Distribute left positions evenly to reduce overlap
    const leftPositions = Array.from({length: count}, (_, i) => (i / count) * 98 + 1);
    for (let i = 0; i < count; i++) {
        const word = document.createElement('span');
        word.className = 'news-word';
        word.textContent = topics[Math.floor(Math.random() * topics.length)];
        // Add a small random offset to left position
        let left = leftPositions[i] + (Math.random() * 1.5 - 0.75);
        word.style.left = left + '%';
        word.style.animationDelay = (Math.random() * 2.5) + 's';
        word.style.animationDuration = (3.5 + Math.random() * 2.5) + 's';
        // Add a random horizontal drift direction
        word.dataset.drift = Math.random() > 0.5 ? 'right' : 'left';
        newsRain.appendChild(word);
    }
    // Fade out loader title after 2s
    setTimeout(() => {
        const loaderTitle = document.getElementById('loaderTitle');
        if (loaderTitle) loaderTitle.style.opacity = '0.5';
    }, 2000);
}
});

// Animation Initialization
function initAnimations() {
    // Animate floating cards
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        
        // Add hover sound effect (visual feedback)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });

    // Animate domain cards
    const domainCards = document.querySelectorAll('.domain-card');
    domainCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.domain-icon');
            icon.style.transform = 'rotate(360deg) scale(1.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.domain-icon');
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
    });
}

// Countdown Timer
function initCountdown() {
    // Set launch date (3 months/90 days from now, calculated at runtime)
    const nowDate = new Date();
    const launchDate = new Date(nowDate.getTime() + 90 * 24 * 60 * 60 * 1000);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            document.querySelector('.countdown-timer').innerHTML = '<h3>🚀 We\'re Live!</h3>';
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Scroll Effects
function initScrollEffects() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-item, .domain-card, .countdown-item').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // Header background on scroll
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(15, 15, 35, 0.95)';
        } else {
            header.style.background = 'rgba(15, 15, 35, 0.9)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const particles = document.querySelector('.particles');
        const gridOverlay = document.querySelector('.grid-overlay');
        
        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        if (gridOverlay) {
            gridOverlay.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Mobile Menu
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Newsletter Form
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            
            // Show loading state
            button.innerHTML = '<span>Subscribing...</span><i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                // Show success message
                button.innerHTML = '<span>Subscribed!</span><i class="fas fa-check"></i>';
                button.style.background = '#10b981';
                
                // Reset form
                this.querySelector('input[type="email"]').value = '';
                
                // Reset button after delay
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                    button.style.background = '';
                }, 2000);
                
                // Show notification
                showNotification('Thank you for subscribing! We\'ll keep you updated.', 'success');
            }, 1500);
        });
    }
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : '#6366f1',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }
    }, 5000);
}

// Interactive Technology Cards
function initTechCards() {
    const techCards = document.querySelectorAll('.floating-card');
    
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            
            // Create modal or show more info
            showTechModal(tech);
        });
    });
}

function showTechModal(tech) {
    const techInfo = {
        'AI': {
            title: 'Artificial Intelligence & Machine Learning',
            description: 'Explore the cutting-edge world of AI, deep learning, neural networks, and intelligent systems that are reshaping our future.',
            features: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP']
        },
        'Cloud': {
            title: 'Cloud Computing Technologies',
            description: 'Master cloud platforms, serverless architecture, and distributed systems that power modern applications.',
            features: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes']
        },
        'Data': {
            title: 'Data Science & Analytics',
            description: 'Dive into data analysis, visualization, big data processing, and statistical modeling techniques.',
            features: ['Python', 'R', 'Tableau', 'Apache Spark']
        },
        'Security': {
            title: 'Cybersecurity & Privacy',
            description: 'Learn about network security, ethical hacking, encryption, and protecting digital assets.',
            features: ['Penetration Testing', 'Encryption', 'Network Security', 'Risk Assessment']
        },
        'IoT': {
            title: 'Internet of Things',
            description: 'Understand connected devices, sensor networks, and the infrastructure of smart systems.',
            features: ['Arduino', 'Raspberry Pi', 'Sensor Networks', 'Edge Computing']
        }
    };
    
    const info = techInfo[tech] || techInfo['AI'];
    showNotification(`Coming soon: ${info.title} courses and resources!`, 'info');
}

// Button Interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary') || e.target.closest('.btn-primary')) {
        const btn = e.target.matches('.btn-primary') ? e.target : e.target.closest('.btn-primary');
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .nav-menu.active {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(15, 15, 35, 0.98);
        padding: 1rem 2rem;
        gap: 1rem;
    }
    
    @media (max-width: 968px) {
        .nav-menu {
            display: none;
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(-45deg) translate(-5px, 6px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(45deg) translate(-5px, -6px);
        }
    }
`;
document.head.appendChild(style);

// Initialize tech cards after DOM load
document.addEventListener('DOMContentLoaded', function() {
    initTechCards();
});

// Performance monitoring
function trackPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }
}

trackPerformance();

// Preload critical resources
function preloadResources() {
    const criticalImages = [
        // Add any critical images here
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

preloadResources();