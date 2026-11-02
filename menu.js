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

// ===== Item photos =====
// "images/..." = cropped from Shaylana's own printed menu. Long IDs = free Unsplash photos.
// Items not listed here have no photo yet (the category photo shows above them).
const U = (id) => "https://images.unsplash.com/photo-" + id + "?w=400&h=400&fit=crop&auto=format&q=70";
const PHOTOS = {
  "Chechebsa Normal": "images/chechebsa.jpg", "Chechebsa Special": "images/chechebsa.jpg",
  "Ful Normal": "images/ful.jpg", "Ful Special": "images/ful.jpg",
  "Scrambled Egg": "images/scrambled.jpg",
  "Omelette Normal": U("1510693206972-df098062cb71"), "Omelette Special": U("1766146431872-a4472ccd3889"),
  "American Breakfast": U("1525473233136-080cdd8b7cb2"),

  "Vegetable Sandwich": U("1768257164310-5f53c8d83a4e"), "Club Sandwich": "images/sandwich.jpg",
  "Steak Sandwich": U("1532768641073-503a250f9754"),

  "Spaghetti Veggie": U("1713449585141-0af71bcbfcc2"), "Fettuccine Alfredo Sauce": "images/pasta.jpg",
  "Lasagna Alfredo": "images/lasagna.jpg", "Linguine & Rigatoni": U("1473093226795-af9932fe5856"),

  "Vegetable Pizza": U("1559160582-eab6966b680f"), "Margarita Pizza": U("1760419991459-8f084f7b9be0"),
  "Beef Pizza": U("1542282811-943ef1a977c3"), "Tuna Pizza": U("1652984021668-455fe27f3f48"),
  "Chicken Pizza": U("1593504049359-74330189a345"), "Shaylana Special Pizza": "images/pizza.jpg",

  "French Fries": U("1526230427044-d092040d48dc"), "Beef Burger": U("1568901346375-23c9450c58cd"),
  "Cheese Burger": U("1757834787931-ddd70f3379a5"), "Double Cheese Burger": U("1607013251379-e6eecfffe234"),
  "Special Burger": "images/burger.jpg", "Triple Burger": U("1572802419224-296b0aeee0d9"),
  "Family Burger": U("1606149059549-6042addafc5a"),

  "Chicken Wrap": U("1778168199427-4e839943d20f"), "Crispy Golden Chicken": U("1426869981800-95ebf51ce900"),
  "Chicken Wing": U("1736952332338-44dc07283462"), "Chicken Cutlet": "images/chicken.jpg",
  "Pan-Seared Chicken": U("1670398564097-0762e1b30b3a"), "Chicken Leg Grill": U("1518492104633-130d0cc84637"),

  "Mixed Salad": U("1472926373053-51b220987527"), "Beef Salad": U("1683315446874-e6a629087ef8"),
  "Tuna Salad": "images/salad.jpg", "Shaylana Special Salad": U("1584799650072-ee2c8f73b811"),

  "Tea": U("1758221052535-8119e3a816b7"), "Espresso": U("1558416165-5fb04b79b0e7"),
  "Coffee": U("1660190345473-43d3bc721c14"), "Ginger Tea": U("1682530016867-6fcc63df0cfb"),
  "Americano": U("1660190345473-43d3bc721c14"), "Macchiato": U("1485808191679-5f86510681a2"),
  "Milk": U("1566670829018-352a0cf3fc9e"), "Cappuccino": U("1564327367919-cb377ea6a88f"),
  "Hot Chocolate": U("1517578239113-b03992dcdd25"), "Iced Latte": U("1461023058943-07fcbe16d735"),
  "Special Tea": U("1572442388796-11668a67e53d"),

  "Ananas (Pineapple) Juice": U("1632996986862-75aa7ac496da"), "Avocado Juice": "images/juice.jpg",
  "Mango Juice": U("1546173159-315724a31696"), "Mixed Juice": U("1497534446932-c925b458314e"),
  "Watermelon Juice": U("1680364390313-9d69759de5c1"), "Orange Juice": U("1600271886742-f049cd451bba"),
  "Strawberry Juice": U("1614707585284-9cb9fc018387"), "Strawberry Juice with Milk": U("1579954115545-a95591f28bfc"),

  "Ananas (Pineapple) Mojito": U("1632995561645-86a7777d3e7a"), "Lemon Mojito": U("1653542772393-71ffa417b1c4"),
  "Avocado Smoothie": U("1759006249055-8c4030a2d56a"), "Special Smoothie": U("1615478503562-ec2d8aa0e24e"),

  "½ Water": "images/softdrinks.jpg", "¾ Water": "images/softdrinks.jpg", "1 Liter Water": "images/softdrinks.jpg",
  "Soft Drink": U("1782046820433-99b6fce8f9b9"),

  "Bread": U("1558465984-9a9302b5b0bc"), "Honey": U("1536788567643-8c2368376526"),
  "Ketchup": U("1611100369029-c0d5ddb80a51"), "Egg": U("1628484641099-0e7ae67fbdc1"),
  "Mozzarella Cheese": U("1676300185089-8781af127fee")
};
_m.forEach((m) => { if (PHOTOS[m.name]) m.img = PHOTOS[m.name]; });

window.MENU = _m;
