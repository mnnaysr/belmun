/* ===================================
   BELMUN 2026 - JavaScript
   Handles mobile navigation and form interactions
   =================================== */

// ===================================
// MOBILE MENU TOGGLE
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle mobile menu when hamburger is clicked
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when a link is clicked
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = mobileMenuToggle && mobileMenuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (mobileMenuToggle) {
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// ===================================
// CONTACT FORM HANDLING
// ===================================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        
        // Get form values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            school: document.getElementById('school').value,
            experience: document.getElementById('experience').value,
            committee: document.getElementById('committee').value,
            message: document.getElementById('message').value
        };
        
        // Validate required fields
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all required fields (Name, Email, and Message)');
            return;
        }
        
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        console.log('Form submitted with data:', formData);
        
        // Show success message
        formSuccess.style.display = 'block';
        
        // Hide the form
        contactForm.style.display = 'none';
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Optional: Reset form after a delay and show it again
        setTimeout(function() {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
        }, 5000); // Reset after 5 seconds
    });
}

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ===================================
// ADD SCROLL EFFECT TO NAVBAR
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ===================================
// ANIMATE ELEMENTS ON SCROLL
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation class
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to cards and sections
    const animateElements = document.querySelectorAll('.info-card, .committee-card, .content-section, .feature-item');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// FORM FIELD ENHANCEMENTS
// ===================================
if (contactForm) {
    // Add focus effects to form inputs
    const formInputs = contactForm.querySelectorAll('input, textarea, select');
    
    formInputs.forEach(input => {
        // Add animation on focus
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
            this.parentElement.style.transition = 'transform 0.2s ease';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
        
        // Real-time validation for email
        if (input.type === 'email') {
            input.addEventListener('blur', function() {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (this.value && !emailRegex.test(this.value)) {
                    this.style.borderColor = '#F44336';
                } else if (this.value) {
                    this.style.borderColor = '#4CAF50';
                }
            });
        }
    });
}

// ===================================
// DYNAMIC COMMITTEE FILTER (Optional Enhancement)
// ===================================
// This can be expanded to add filtering functionality to the committees page
document.addEventListener('DOMContentLoaded', function() {
    const committeesPage = document.querySelector('.committees-content');
    
    if (committeesPage) {
        // Add hover effect highlighting
        const committeeCards = document.querySelectorAll('.committee-card');
        
        committeeCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.borderWidth = '3px';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.borderWidth = '2px';
            });
        });
    }
});

// ===================================
// CONSOLE MESSAGE
// ===================================
console.log('%cBELMUN 2026', 'color: #7D4E57; font-size: 24px; font-weight: bold;');
console.log('%cWebsite loaded successfully! Welcome to the future of diplomacy.', 'color: #364156; font-size: 14px;');
