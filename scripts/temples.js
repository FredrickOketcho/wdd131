// Select the menu button and navigation
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("main-nav");

// Toggle the navigation menu
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});

// Footer current year
document.getElementById("currentyear").textContent =
    new Date().getFullYear();

// Footer last modified date
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;