// Toggle Sidebar Menu
function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    let overlay = document.getElementById("sidebar-overlay");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Close sidebar
        overlay.style.display = "none";
    } else {
        sidebar.style.left = "0px"; // Open sidebar
        overlay.style.display = "block";
    }
}