const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function loadProducts(products){
    const productSelect = document.getElementById("product-name");
    products.forEach(product => {
        const optionEl = document.createElement("option");
        optionEl.value = product.id;
        optionEl.textContent = product.name;
        productSelect.appendChild(optionEl);
    });
}

function countReviews(){
    let reviewCount = localStorage.getItem('review-count');
    if (!reviewCount){
        reviewCount = 0;
    }
    reviewCount++;
    return reviewCount
}

function saveReviews(reviewCount){
    localStorage.setItem('review-count',reviewCount);
}

loadProducts(products)

document.querySelector("form").addEventListener('submit', ()=>{
    const reviewCount = countReviews();
    saveReviews(reviewCount);
})