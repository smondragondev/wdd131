function loadReviewCount(){
    const spanElem = document.getElementById("postReviewCount");
    const reviewCount = localStorage.getItem("review-count");
    spanElem.textContent = reviewCount;
}

loadReviewCount();