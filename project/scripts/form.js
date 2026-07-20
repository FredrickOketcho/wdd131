// Product Array
const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    // Populate the select options dynamically
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // Sets value to product ID
        option.textContent = product.name; // Displays the product name
        productSelect.appendChild(option);
    });

    // Do not allow a future installation date.
    const installDate = document.getElementById("install-date");
    installDate.max = new Date().toISOString().split("T")[0];

    // Simple footer year updater if needed
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModified = document.getElementById("last-modified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
