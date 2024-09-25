const nav = document.getElementById("myNav");
const sections = document.querySelectorAll("[data-section]");
const navLinks = document.querySelectorAll('.nav-link');

// menu
const closeBtn = document.querySelector('.close-button');
const menuBtn = document.querySelector('.menu-button');


function showMenubar(){
    const menu = document.querySelector('.navigation-links');
    menu.style.display = "flex";
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
}

function hideMenubar(){
    const menu = document.querySelector('.navigation-links');
    menu.style.display = "none";
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'block';
}

function toggleMenu() {
    document.body.classList.toggle('no-scroll'); // Toggle scrolling

    buttons.forEach(button => {
        button.disabled = !button.disabled; // Disable or enable buttons
    });
}

// Add event listeners to open/close menu
menuBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    toggleMenu(); // Call the function to toggle the menu
});

// scroll to sections

// scrolls to about section on click
function scrollToAboutUsSection(){
    document.querySelector("#about").scrollIntoView({
        behavior: 'smooth'
    });
}

// scrolls to contact us section
function scrollToContactUsSection(){
    document.querySelector("#contact").scrollIntoView({
        behavior: 'smooth'
    });
}

// scrolls to services section
function scrollToServicesSection(){
    document.querySelector("#services").scrollIntoView({
        behavior: 'smooth'
    });
}

// Changes navbar background color based on section
document.addEventListener("scroll", function() {
    const navbar = document.getElementById("header");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (section.getAttribute("data-section") === "home") {
                navbar.style.background = "linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%)";
                navbar.style.backdropFilter = "blur(10px)";
                navLinks.forEach(link => link.style.color = "white");
            } else {
                navbar.style.backgroundColor = "white";
                // navbar.style.backdropFilter = "blur(10px)";
                navLinks.forEach(link => link.style.color = "black");
            }
        }
    });
});

// Function to set the active link based on scroll position
function setActiveLink() {
    let currentSection = '';
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('data-section');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
}

// Add event listener for scroll
window.addEventListener('scroll', function() {
    setActiveLink();
    // Also update navbar background based on scroll
    const navbar = document.getElementById("header");
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            if (section.getAttribute("data-section") === "home") {
                navbar.style.background = "linear-gradient(rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.5) 50%)";
                navbar.style.backdropFilter = "blur(10px)";
                navLinks.forEach(link => link.style.color = "white");
            } else {
                navbar.style.background = "white";
                // navbar.style.backdropFilter = "blur(10px)";
                navLinks.forEach(link => link.style.color = "black");
            }
        }
    });
});

// Set the active link on initial load
document.addEventListener('DOMContentLoaded', setActiveLink);
