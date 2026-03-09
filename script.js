// ========================
// Navbar scroll behavior
// ========================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, { passive: true });


// ========================
// Hamburger menu toggle
// ========================
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('open');
});

// Close menu when a nav link is tapped (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});


// ========================
// Lightbox per immagini
// ========================
window.addEventListener('load', () => {
    const lightbox    = document.getElementById('lightbox-overlay');
    const lightboxImg = lightbox.querySelector('img');
    const clickable   = document.querySelectorAll('.merch-image img, .gallery-item img');

    clickable.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightbox.style.display = 'flex';
            lightboxImg.src = img.src;
        });
    });

    lightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
});


// ========================
// Britney Glow (Cinematic)
// ========================
document.addEventListener('DOMContentLoaded', function () {
    const btn  = document.getElementById('britney-btn');
    const glow = document.getElementById('britney-glow');
    if (!btn || !glow) return;

    btn.addEventListener('click', function () {
        glow.classList.add('active');
        const url = btn.href;
        window.open(url, '_blank');
        setTimeout(() => {
            glow.classList.remove('active');
        }, 5000);
    });
});
