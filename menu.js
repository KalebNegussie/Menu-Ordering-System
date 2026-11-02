// ===== Shaylana Cafe & Restaurant — edit the menu here =====
// To change a price: edit the number. To hide an item: delete its line.
// Category photos live in the images/ folder. An item can also have its own photo: img: "images/xyz.jpg"

window.RESTAURANT = {
  name: "Shaylana Cafe & Restaurant",
  tagline: "Good Food • Good Vibes • Always",
  currency: "ETB",
  tables: 20
};

window.CATEGORIES = [
  { name: "Breakfast", img: "images/breakfast.jpg" },
  { name: "Sandwiches", img: "images/sandwich.jpg" },
  { name: "Pasta", img: "images/pasta.jpg" },
  { name: "Traditional Foods", img: "images/traditional.jpg" },
  { name: "Pizza", img: "images/pizza.jpg" },
  { name: "Burgers & Sides", img: "images/burger.jpg" },
  { name: "Chicken", img: "images/chicken.jpg" },
  { name: "Salads", img: "images/salad.jpg" },
  { name: "Hot Drinks", img: "images/hotdrinks.jpg" },
  { name: "Juices", img: "images/juice.jpg" },
  { name: "Shakes, Smoothies & Mojitos", img: "images/juice.jpg" },
  { name: "Soft Drinks", img: "images/softdrinks.jpg" },
  { name: "Extras" }
];

const _m = [];
const add = (cat, list) => list.forEach(([name, price], i) =>
  _m.push({ id: cat.replace(/[^A-Za-z]/g, "").slice(0, 6).toLowerCase() + (i + 1), cat, name, price }));

add("Breakfast", [
  ["Fetira Normal", 300], ["Fetira Special", 400], ["Chechebsa Normal", 350], ["Chechebsa Special", 400],
  ["Ful Normal", 350], ["Ful Special", 450], ["Scrambled Egg", 380], ["Omelette Normal", 450],
  ["Omelette Special", 500], ["American Breakfast", 600]
]);
add("Sandwiches", [
  ["Egg Sandwich", 380], ["Vegetable Sandwich", 420], ["Tuna Sandwich", 610], ["Club Sandwich", 690], ["Steak Sandwich", 700]
]);
add("Pasta", [
  ["Linguine with Potato Sauce", 600], ["Spaghetti Veggie", 650], ["Fettuccine Alfredo Sauce", 800],
  ["Lasagna Alfredo", 800], ["Linguine & Rigatoni", 800]
]);
add("Traditional Foods", [
  ["Normal Firfir", 400], ["Tibs Firfir", 550], ["Kuanta Firfir", 650], ["Chikina Tibs", 800]
]);
add("Pizza", [
  ["Vegetable Pizza", 600], ["Margarita Pizza", 680], ["Beef Pizza", 700], ["Tuna Pizza", 750],
  ["Chicken Pizza", 800], ["Shaylana Special Pizza", 999], ["Family Pizza", 1200]
]);
add("Burgers & Sides", [
  ["French Fries", 380], ["Beef Burger", 650], ["Cheese Burger", 690], ["Double Cheese Burger", 790],
  ["Special Burger", 900], ["Triple Burger", 999], ["Family Burger", 1200]
]);
add("Chicken", [
  ["Chicken Wrap", 650], ["Crispy Golden Chicken", 680], ["Chicken Wing", 800], ["Chicken Cutlet", 950],
  ["Pan-Seared Chicken", 999], ["Chicken Leg Grill", 1100]
]);
add("Salads", [
  ["Mixed Salad", 550], ["Beef Salad", 650], ["Tuna Salad", 650], ["Shaylana Special Salad", 700]
]);
add("Hot Drinks", [
  ["Tea", 85], ["Espresso", 95], ["Coffee", 100], ["Ginger Tea", 100], ["Americano", 110], ["Peanut Tea", 120],
  ["Tea Espresso", 120], ["Macchiato", 130], ["Milk", 150], ["Cappuccino", 180], ["Hot Chocolate", 180],
  ["Iced Latte", 180], ["Special Tea", 180]
]);
add("Juices", [
  ["Ananas (Pineapple) Juice", 300], ["Avocado Juice", 300], ["Banana Juice", 300], ["Mango Juice", 300],
  ["Mixed Juice", 300], ["Watermelon Juice", 300], ["Orange Juice", 400], ["Strawberry Juice", 410],
  ["Strawberry Juice with Milk", 470]
]);
add("Shakes, Smoothies & Mojitos", [
  ["Ananas (Pineapple) Mojito", 350], ["Lemon Mojito", 350], ["Orange Mojito", 350], ["Strawberry Mojito", 350],
  ["Telba Shake", 300], ["Banana Shake", 320], ["Avocado Smoothie", 350], ["Papaya Shake", 370],
  ["Temer (Date) Shake", 370], ["Mango Shake", 390], ["Special Smoothie", 400]
]);
add("Soft Drinks", [
  ["½ Water", 35], ["¾ Water", 50], ["1 Liter Water", 60], ["Soft Drink", 100], ["Ambo", 100]
]);
add("Extras", [
  ["Bread", 20], ["Honey", 30], ["Ketchup", 30], ["Chilli Sauce", 40], ["Injera", 40], ["Egg", 50],
  ["Mayonnaise", 70], ["Cheese", 100], ["Mozzarella Cheese", 100], ["BBQ Sauce", 100]
]);

window.MENU = _m;
