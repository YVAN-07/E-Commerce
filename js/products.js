const list = document.getElementById("product-list");

function renderProducts(data) {
  list.innerHTML = "";
  data.forEach(p => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₱${p.price}</p>
        <a class="btn" href="product.html?id=${p.id}">View</a>
      </div>
    `;
  });
}

function filterCategory(cat) {
  if (cat === "All") renderProducts(products);
  else renderProducts(products.filter(p => p.category === cat));
}

renderProducts(products);

document.getElementById("breadcrumb-current").textContent = "Products";
