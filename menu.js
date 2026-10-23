// ===== Edit your demo restaurant here =====
// Photos: set img to a URL, or put a file in the images/ folder and use img: "images/firfir.jpg".
// Items without img show their emoji instead.
window.RESTAURANT = {
  name: "Demo Bistro",
  tagline: "Cafe & Restaurant",
  currency: "ETB",
  tables: 20
};

window.MENU = [
  { id: "b1", cat: "Breakfast", emoji: "🍳", name: "Firfir", desc: "Shredded injera with spiced berbere sauce", price: 180 },
  { id: "b2", img: "https://images.unsplash.com/photo-1621973569279-cd3b5c4bfd43?w=400&h=400&fit=crop&auto=format&q=70", cat: "Breakfast", emoji: "🥚", name: "Enqulal Firfir", desc: "Scrambled eggs with tomato, onion and chili", price: 200 },
  { id: "b3", cat: "Breakfast", emoji: "🥣", name: "Chechebsa", desc: "Flatbread pieces with butter and berbere", price: 190 },

  { id: "m1", img: "https://images.unsplash.com/photo-1559160582-eab6966b680f?w=400&h=400&fit=crop&auto=format&q=70", cat: "Mains", emoji: "🍕", name: "Vegetable Pizza", desc: "Tomato, mozzarella, peppers, olives", price: 450 },
  { id: "m2", img: "https://images.unsplash.com/photo-1606149059549-6042addafc5a?w=400&h=400&fit=crop&auto=format&q=70", cat: "Mains", emoji: "🍔", name: "Fasting Burger", desc: "Plant-based patty, lettuce, tomato, fries", price: 380 },
  { id: "m3", cat: "Mains", emoji: "🍛", name: "Shiro Tegabino", desc: "Chickpea stew served bubbling with injera", price: 260 },
  { id: "m4", cat: "Mains", emoji: "🥩", name: "Tibs", desc: "Sautéed beef with onion, rosemary and pepper", price: 520 },
  { id: "m5", img: "https://images.unsplash.com/photo-1673442635965-34f1b36d8944?w=400&h=400&fit=crop&auto=format&q=70", cat: "Mains", emoji: "🍝", name: "Spaghetti Bolognese", desc: "Classic meat sauce, parmesan", price: 350 },

  { id: "s1", img: "https://images.unsplash.com/photo-1472926373053-51b220987527?w=400&h=400&fit=crop&auto=format&q=70", cat: "Salads", emoji: "🥗", name: "Mixed Salad", desc: "Greens, tomato, cucumber, house dressing", price: 220 },
  { id: "s2", img: "https://images.unsplash.com/photo-1584799650072-ee2c8f73b811?w=400&h=400&fit=crop&auto=format&q=70", cat: "Salads", emoji: "🥙", name: "Tuna Salad", desc: "Tuna, egg, potato, greens", price: 300 },

  { id: "d1", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=400&h=400&fit=crop&auto=format&q=70", cat: "Drinks", emoji: "☕", name: "Macchiato", desc: "Espresso with steamed milk", price: 70 },
  { id: "d2", cat: "Drinks", emoji: "🫖", name: "Tea", desc: "Black tea with spices", price: 40 },
  { id: "d3", cat: "Drinks", emoji: "🥭", name: "Papaya Juice", desc: "Fresh blended papaya", price: 150 },
  { id: "d4", cat: "Drinks", emoji: "🥑", name: "Spris Juice", desc: "Layered avocado, mango and papaya", price: 170 },
  { id: "d5", cat: "Drinks", emoji: "💧", name: "Water 1L", desc: "Bottled water", price: 50 }
];
