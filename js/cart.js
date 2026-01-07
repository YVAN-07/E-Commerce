const cartItems = document.getElementById("cart-items");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function changeQty(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  saveCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<h2>Your cart is empty</h2>";
    return;
  }

  let grandTotal = 0;

  cart.forEach((item, index) => {
    const product = products.find(p => p.id === item.id);
    const itemTotal = product.price * item.qty;
    grandTotal += itemTotal;

    cartItems.innerHTML += `
      <div class="cart-item">

        <div class="cart-top">
          <img src="${product.image}" alt="${product.name}">

          <div class="cart-middle">
            <h4>${product.name}</h4>

            <div class="cart-actions">
              <div class="qty-control">
                <button onclick="changeQty(${index}, -1)">−</button>
                <span>${item.qty}</span>
                <button onclick="changeQty(${index}, 1)">+</button>
              </div>

              <button class="delete-btn" onclick="removeItem(${index})">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>

          <div class="cart-price">
            <span class="price-label">Price</span>
            <span class="price-value">₱${product.price}</span>
            <span class="price-qty">x ${item.qty}</span>
          </div>

        </div>

        <div class="cart-bottom">
          <span>Total</span>
          <span>₱${itemTotal}</span>
        </div>

      </div>
      <div class="divider"></div>
    `;
  });

  cartItems.innerHTML += `
    <h3 class="grand-total">
      <span>Grand Total</span>
      <span>₱${grandTotal}</span>
    </h3>
    <a href="checkout.html" class="btn">
      <i class="fa-solid fa-credit-card"></i> Proceed to Checkout
    </a>
  `;
}

renderCart();
