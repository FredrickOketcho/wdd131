document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const calculateWindChill = (temp, windSpeed) => 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));

window.addEventListener("DOMContentLoaded", () => {
    try {
        const tempText = document.getElementById("temp").textContent;
        const windText = document.getElementById("wind").textContent;

        const temp = parseFloat(tempText);
        const windSpeed = parseFloat(windText);
        
        const windChillElement = document.getElementById("wind-chill");

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