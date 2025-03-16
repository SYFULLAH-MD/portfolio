// Toggle Navbar Dropdown
function toggleMenu() {
    let navLinks = document.querySelector(".nav-links");
    let hamburger = document.querySelector(".hamburger");
    
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("toggle");
}