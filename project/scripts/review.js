document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("review-counter");
    const hasSubmittedReview = new URLSearchParams(window.location.search).has("productName");
    let reviewCount = Number.parseInt(localStorage.getItem("reviewCount"), 10) || 0;

    // Count submissions, rather than direct visits or page refreshes.
    if (hasSubmittedReview && !history.state?.reviewCounted) {
        reviewCount += 1;
        localStorage.setItem("reviewCount", reviewCount);
        history.replaceState({ ...history.state, reviewCounted: true }, "", window.location.href);
    }

    counter.textContent = reviewCount;

    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModified = document.getElementById("last-modified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
