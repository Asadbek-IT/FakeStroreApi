const API = `https://fakestoreapi.com/products`;
const elList = document.querySelector(".product-list");
const elLoading = document.querySelector(".loading");

function getData(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data));
}

getData(API);

function showData(products) {
  elLoading.innerHTML = "";
  products.map((item, index) => {
    elList.innerHTML += `
      <div class="product">
        <p class="category">${item.category}</p>
        <p class="decribe">
          ${item.description.slice(0, 40)}...
        </p>

        <img 
          width="200" 
          height="200" 
          src=${item.image} 
          class="image" 
          alt=""
        />

        <p class="price">$${item.price}</p>
        <p class="rating">${item.rating.rate}</p>
        <p class="title">${item.title.slice(0, 20)}...</p>
      </div>
    `;
  });
}
