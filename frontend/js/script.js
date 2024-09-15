function openNav(){
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("closebtn").style.display = "block";
    document.getElementById("hamburgerIcon").style.display = "none";
    document.body.classList.add("no-scroll");  // Add no-scroll class
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("hamburgerIcon").style.display = "block";
    document.body.classList.remove("no-scroll");  // Remove no-scroll class
}

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
const sections = document.querySelectorAll("[data-section]");
const navLinks = document.querySelectorAll(".nav-link");

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
