// 1. Dynamically output the current copyright year
// Get the current year using the JavaScript Date object
const currentYear = new Date().getFullYear();

// Select the span element with the ID "currentyear" and set its content
document.getElementById("currentyear").textContent = currentYear;

// 2. Dynamically output the date the document was last modified
// Select the element with the ID "lastModified" and populate it with the document's lastModified string
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;