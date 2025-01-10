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

// Navbar scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.boxShadow = 'none';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.feature-card, .assistant-card, .pricing-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Add hover effect to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseout', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Add click animations to cards
document.querySelectorAll('.feature-card, .assistant-card').forEach(card => {
    card.addEventListener('click', () => {
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// Initialize pricing toggle animation
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(-10px)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = '';
        }
    });
});
