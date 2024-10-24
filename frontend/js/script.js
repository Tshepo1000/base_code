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
    document.body.classList.toggle('no-scroll');
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
    event.preventDefault(); 
    toggleMenu(); 
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



// changes the color of the links according to screen size
const smallScreen = window.matchMedia("(max-width: 600px)");
smallScreen.addListener(handleSmallScreen);

// Function to execute when screen width is below 600px
function handleSmallScreen(e) {
    if (e.matches) {
        document.addEventListener("scroll", function() {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const menu_links = document.getElementById("myNav");

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
        
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    if (section.getAttribute("data-section") === "home") {
                        menu_links.style.backgroundColor = "black";
                    } else {
                        menu_links.style.backgroundColor = "white";
                    }
                }
            });
        });
    }
}

handleSmallScreen(smallScreen);

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

// hire us section
// buttons
const customGates = document.getElementById('custom-gates');
const securityBuglarBars = document.getElementById('security-buglar-bars');
const gateMaintenance = document.getElementById('gate-maintenance');
const gateRefurb = document.getElementById('gate-refurbishments');
const buglarBarsRefurb = document.getElementById('security-buglar-bars-refurb');
const mobileWelding = document.getElementById('mobile-welding');

// form
const form = document.getElementById('form');
const overlay = document.getElementById('overlay1');
const servicesSection = document.querySelector('.services');

// blurs sections
function blurSections() {
    // Get all sections by their 'data-section' attribute
    const sections = document.querySelectorAll('section');

    // Loop through each section and apply the blur effect
    sections.forEach(section => {
        section.style.filter = 'blur(5px)';
    });

    document.body.classList.toggle('no-scroll');
}

// unblurs the sections
function removeBlur() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        section.style.filter = 'none';  
    });

    document.body.classList.remove('no-scroll');
}


securityBuglarBars.addEventListener('click', function(){
    form.style.display = "block";
    document.getElementById('mysubject').value = "Security Buglar Bars Enquiry";
    overlay.classList.add('show-overlay');
    
})

gateMaintenance.addEventListener('click', function(){
    form.style.display = "block";
    document.getElementById('mysubject').value = "Gate Maintenance Enquiry";
    overlay.classList.add('show-overlay');
})

customGates.addEventListener('click', function(){
    form.style.display = "block";
    document.getElementById('mysubject').value = "Custom Gate Enquiry";
    overlay.classList.add('show-overlay');
})

gateRefurb.addEventListener('click', function(){
    form.style.display = "block";
    document.getElementById('mysubject').value = "Gate Refurbishments Enquiry";
    overlay.classList.add('show-overlay');
})

buglarBarsRefurb.addEventListener('click', function(){
    form.style.display = "block";
    document.getElementById('mysubject').value = "Buglar Bars Refurbishments Enquiry";
    overlay.classList.add('show-overlay');
})

mobileWelding.addEventListener('click', function(){
    form.style.display = "block";
    document.getElementById('mysubject').value = "Mobile Welding Enquiry";
    overlay.classList.add('show-overlay');
})

const closebutton = document.getElementById('closeBtn');

closebutton.addEventListener('click', function(){
    form.style.display = "none";
    form.classList.remove('show-form');
    overlay.classList.remove('show-overlay');
})



