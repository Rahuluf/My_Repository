// Toggle dark mode and light mode
const themeToggleButton = document.getElementById('theme-toggle');
const colorOptions = document.getElementById('color-options');
let isDarkMode = false;

themeToggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.querySelector('header').classList.remove('dark-mode');
        document.querySelector('form').classList.remove('dark-mode');
        themeToggleButton.innerHTML = '<i class="fas fa-adjust"></i>'; // Moon icon
    } else {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('form').classList.add('dark-mode');
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon
    }
    isDarkMode = !isDarkMode;
});

// Toggle color options visibility
const textColorToggleButton = document.getElementById('text-color-toggle');
textColorToggleButton.addEventListener('click', () => {
    colorOptions.style.display = colorOptions.style.display === 'block' ? 'none' : 'block';
});

// Change text color
const textColorButtons = document.querySelectorAll('.text-color');
textColorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const color = button.getAttribute('data-color');
        document.querySelectorAll('.section, .section p, .section h1, .section h2, .section h3, footer').forEach(el => {
            el.style.color = color;
        });
    });
});

// Reveal sections on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (section.offsetTop < scrollPosition - 100) {
            section.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    contactForm.reset();
});
