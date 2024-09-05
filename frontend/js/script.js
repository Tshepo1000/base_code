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

