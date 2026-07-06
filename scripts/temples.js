// Select the hamburger button and navigation menu
const menuButton = document.getElementById("menu");
const navigation = document.getElementById("main-nav");

// Toggle the navigation menu when the hamburger is clicked
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navigation.classList.toggle("open");
});

// Display the current year in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display the last modified date in the footer
document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;