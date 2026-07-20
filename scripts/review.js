document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("review-counter");
    const hasSubmittedReview = new URLSearchParams(window.location.search).has("productName");
    let reviewCount = Number.parseInt(localStorage.getItem("reviewCount"), 10) || 0;

    if (hasSubmittedReview && !history.state?.reviewCounted) {
        reviewCount += 1;
        localStorage.setItem("reviewCount", reviewCount);
        history.replaceState({ ...history.state, reviewCounted: true }, "", window.location.href);
    }

    counter.textContent = reviewCount;
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
});
