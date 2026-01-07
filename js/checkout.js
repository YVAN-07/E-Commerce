if ((JSON.parse(localStorage.getItem("cart")) || []).length === 0) {
  alert("Cart is empty!");
  window.location.href = "products.html";
}
