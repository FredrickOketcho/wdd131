// Display current year in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Display last modified date in footer
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Calculate wind chill factor using metric formula
const calculateWindChill = (temp, windSpeed) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));

// Wait for DOM to fully load before executing wind chill calculation
window.addEventListener("DOMContentLoaded", () => {
    try {
        // Get temperature and wind speed from the static HTML values
        const tempText = document.getElementById("temp").textContent;
        const windText = document.getElementById("wind").textContent;

        // Parse the numeric values from the text content
        const temp = parseFloat(tempText);
        const windSpeed = parseFloat(windText);
        
        // Get the wind chill element to update
        const windChillElement = document.getElementById("wind-chill");

        // Calculate wind chill only if conditions are met (temp <= 10°C and wind speed > 4.8 km/h)
        if (temp <= 10 && windSpeed > 4.8) {
            const chill = calculateWindChill(temp, windSpeed);
            windChillElement.textContent = `${chill.toFixed(1)} °C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    } catch (error) {
        console.error("Error calculating wind chill:", error);
        document.getElementById("wind-chill").textContent = "N/A";
    }
});