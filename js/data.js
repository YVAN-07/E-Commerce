/* ===============================
   MAIN PRODUCTS (SOURCE OF TRUTH)
================================ */
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1499,
    category: "Accessories",
    image: "assets/images/wireless_headphone.jpg",
    description: "Experience clear and balanced audio with these wireless headphones designed for everyday use. Features include noise isolation, comfortable cushioned ear pads, and long battery life suitable for music, calls, and online meetings."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    category: "Wearables",
    image: "assets/images/smart_watch.jpg",
    description: "This smart watch helps you stay connected and healthy by tracking daily activity, heart rate, steps, and sleep patterns. It also displays notifications, time, and fitness data in a sleek, modern design."
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 999,
    category: "Gaming",
    image: "assets/images/gaming_mouse.jpg",
    description: "A precision gaming mouse built for performance and comfort. It features adjustable DPI settings, ergonomic grip, responsive buttons, and customizable RGB lighting for an enhanced gaming experience."
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 3299,
    category: "Gaming",
    image: "assets/images/mechanical_keyboard.jpg",
    description: "This mechanical keyboard offers tactile key feedback for fast and accurate typing. Equipped with durable mechanical switches, customizable RGB backlighting, and a sturdy build ideal for gaming and productivity."
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 1899,
    category: "Accessories",
    image: "assets/images/bluetooth_speaker1.jpeg",
    description: "A portable Bluetooth speaker that delivers powerful sound with deep bass. Designed for indoor and outdoor use, it features wireless connectivity, compact size, and long-lasting battery life."
  },
  {
    id: 6,
    name: "Fitness Band",
    price: 1299,
    category: "Wearables",
    image: "assets/images/fitness_band.jpg",
    description: "This lightweight fitness band monitors daily steps, heart rate, calories burned, and sleep quality. Ideal for users who want a simple and effective way to track health and fitness goals."
  },
  {
    id: 7,
    name: "Wireless Charger",
    price: 799,
    category: "Accessories",
    image: "assets/images/wireless_charger.jpg",
    description: "A fast wireless charging pad compatible with supported smartphones and devices. Simply place your device on the pad for convenient cable-free charging with built-in safety protection."
  },
  {
    id: 8,
    name: "Gaming Headset",
    price: 2199,
    category: "Gaming",
    image: "assets/images/gaming_headset.jpg",
    description: "This gaming headset provides immersive surround sound and clear voice communication. Features include noise-isolating ear cups, adjustable microphone, and comfortable padding for long gaming sessions."
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 1499,
    category: "Accessories",
    image: "assets/images/wireless_mouse.jpg",
    description: "A reliable wireless mouse designed for smooth navigation and productivity. Offers precise tracking, ergonomic shape, and long battery life suitable for office work and casual use."
  },
  {
    id: 10,
    name: "Badminton Racket",
    price: 999,
    category: "Accessories",
    image: "assets/images/badminton_racket.jpg",
    description: "A lightweight badminton racket designed for beginners and casual players. Provides good control and swing balance, making it suitable for training, recreational games, and improving skills."
  },
  {
    id: 11,
    name: "Nike Shoes",
    price: 4299,
    category: "Wearables",
    image: "assets/images/nike_shoes.jpg",
    description: "Comfortable and durable Nike shoes designed for everyday wear and light sports activities. Features cushioned soles, breathable materials, and a modern style suitable for both casual and athletic use."
  },
  {
    id: 12,
    name: "Gold Ring",
    price: 2499,
    category: "Wearables",
    image: "assets/images/gold_ring.jpg",
    description: "An elegant gold ring crafted with a polished finish. Suitable for daily wear or special occasions, offering a simple yet stylish design that complements any outfit."
  }
];


/* ===============================
   HOT DISCOUNTS (REFERENCES)
================================ */
const discountedProducts = [
  { productId: 5, originalPrice: 1999, discountedPrice: 1399 },
  { productId: 3, originalPrice: 1299, discountedPrice: 999 },
  { productId: 1, originalPrice: 1899, discountedPrice: 1499 },
  { productId: 8, originalPrice: 2699, discountedPrice: 2199 },
  { productId: 10, originalPrice: 999, discountedPrice: 649 },
  { productId: 12, originalPrice: 2499, discountedPrice: 2199 },
  { productId: 2, originalPrice: 2499, discountedPrice: 1999 },
  { productId: 7, originalPrice: 799, discountedPrice: 699 },
];

/* ===============================
   TOP SELLING (REFERENCES)
================================ */
const topSellingProducts = [
  { productId: 4 },
  { productId: 2 },
  { productId: 6 },
  { productId: 5 },
  { productId: 8 },
  { productId: 9 },
  { productId: 11 },
  { productId: 12 },
];
