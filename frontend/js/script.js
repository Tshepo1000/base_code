function openNav(){
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("closebtn").style.display = "block";
    document.getElementById("hamburgerIcon").style.display = "none";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("closebtn").style.display = "none";
    document.getElementById("hamburgerIcon").style.display = "block";
}