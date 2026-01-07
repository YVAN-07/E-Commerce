const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

const product = products.find(p => p.id === productId);

/* ===== SAFETY CHECK (VERY IMPORTANT) ===== */
if (!product) {
  document.getElementById("details").innerHTML = `
    <h2>Product not found</h2>
    <p>The product you selected does not exist.</p>
    <a href="products.html" class="btn">Back to Products</a>
  `;
  throw new Error("Product not found");
}

/* ===== BREADCRUMB ===== */
document.getElementById("breadcrumb-current").textContent = product.name;

/* ===== DUMMY REVIEWS ===== */
const reviews = [
  { user: "John", rating: 5, comment: "Great quality and fast delivery!" },
  { user: "Maria", rating: 4, comment: "Worth the price." },
  { user: "Alex", rating: 4, comment: "Product works as expected." }
];

function renderStars(count) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += i <= count ? "★" : "☆";
  }
  return stars;
}

/* ===== PAGE RENDER ===== */
document.getElementById("details").innerHTML = `
  <div class="product-detail">

    <div class="product-image">
      <img src="${product.image}" alt="${product.name}">
    </div>

    <div class="product-info">
      <h2>${product.name}</h2>

      <div class="rating">
        <span class="stars">${renderStars(4)}</span>
        <span class="rating-text">(4.0)</span>
      </div>

      <p class="description">${product.description}</p>
      <h3>₱${product.price}</h3>

      <button class="btn" onclick="addToCart()">
        <i class="fa-solid fa-cart-plus"></i> Add to Cart
      </button>
    </div>

  </div>

  <div class="divider"></div>

  <div class="reviews">
    <h3>Customer Reviews</h3>
    ${reviews.map(r => `
      <div class="review">
        <strong>${r.user}</strong>
        <span class="stars">${renderStars(r.rating)}</span>
        <p>${r.comment}</p>
      </div>
    `).join("")}
  </div>
`;

/* ===== CART ===== */
function addToCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
  updateCartCount();
}
