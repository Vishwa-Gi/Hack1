// DOM Elements
const userBtn = document.getElementById('userBtn');
const chefBtn = document.getElementById('chefBtn');
const roleInput = document.getElementById('roleInput');
const loginButton = document.getElementById('loginButton');
const username = document.getElementById('username');
const landingPage = document.getElementById('landingPage');
const userDashboard = document.getElementById('userDashboard');
const chefDashboard = document.getElementById('chefDashboard');
const userDisplayName = document.getElementById('userDisplayName');
const chefDisplayName = document.getElementById('chefDisplayName');
const filterBtns = document.querySelectorAll('.filter-btn');

// Role toggle functionality
userBtn.addEventListener('click', () => {
    userBtn.classList.add('active');
    chefBtn.classList.remove('active');
    roleInput.value = 'user';
});

chefBtn.addEventListener('click', () => {
    chefBtn.classList.add('active');
    userBtn.classList.remove('active');
    roleInput.value = 'chef';
});

// Login functionality
loginButton.addEventListener('click', () => {
    const role = roleInput.value;
    const usernameValue = username.value;
    
    if (!usernameValue) {
        alert('Please enter a username');
        return;
    }
    
    landingPage.style.display = 'none';
    
    if (role === 'user') {
        userDashboard.style.display = 'block';
        userDisplayName.textContent = usernameValue;
    } else {
        chefDashboard.style.display = 'block';
        chefDisplayName.textContent = usernameValue;
    }
});

// Slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);

// Filter toggle functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Card hover animations enhancement
const statCards = document.querySelectorAll('.stat-card');
statCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
    });
});

// Simulate data for chef dashboard
document.addEventListener('DOMContentLoaded', function() {
    // This could be expanded to create charts and visualizations
    // using libraries like Chart.js in a production environment
    console.log('HomeU website loaded successfully');
});