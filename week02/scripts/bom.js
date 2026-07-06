// 1. Declare variables holding references to the elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// List of valid Book of Mormon books for validation
const bomBooks = [
    "1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Words of Mormon",
    "Mosiah", "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"
];

// Helper function to capitalize input properly (e.g., "alma 5" -> "Alma 5")
function formatChapterInput(str) {
    return str
        .trim()
        .replace(/\s+/g, ' ') // Collapse multiple spaces into one
        .replace(/\b\w/g, c => c.toUpperCase()); // Capitalize first letter of words
}

// Helper function to validate if the input starts with a valid book name
function isValidBook(str) {
    return bomBooks.some(book => str.toLowerCase().startsWith(book.toLowerCase()));
}

// 2. Click event listener for the Add Chapter button
button.addEventListener('click', function () {
    const rawValue = input.value;
    const formattedValue = formatChapterInput(rawValue);
    
    // Feature: Better UI Feedback & Empty Check
    if (formattedValue === '') {
        alert("Please enter a book and chapter.");
        input.focus();
        return; 
    }

    // Feature: Validate Input (Only accept Book of Mormon books)
    if (!isValidBook(formattedValue)) {
        alert("Please enter a valid Book of Mormon book name (e.g., 'Alma 5' or '1 Nephi 3').");
        input.focus();
        return;
    }

    // Feature: Limit to 10 entries (Enforce the "Top 10" constraint)
    const currentItems = list.querySelectorAll('li');
    if (currentItems.length >= 10) {
        alert("You have reached your Top 10 limit! Delete an entry before adding a new one.");
        input.value = '';
        input.focus();
        return;
    }

    // Feature: Prevent Duplicates
    const existingChapters = Array.from(currentItems).map(li => {
        // Strip out the text content minus the ❌ icon
        return li.textContent.replace('❌', '').trim();
    });

    if (existingChapters.includes(formattedValue)) {
        alert(`"${formattedValue}" is already in your Top 10 list!`);
        input.focus();
        return;
    }

    // --- If all checks pass, build and add the DOM elements ---
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    // Standardized text format applied here
    li.textContent = formattedValue;
    
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${formattedValue}`);
    
    // Delete event listener
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });
    
    li.append(deleteButton);
    list.append(li);
    
    // Clean up interface
    input.value = '';
    input.focus();
});