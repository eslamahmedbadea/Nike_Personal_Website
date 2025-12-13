// Select main elements
const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
  },
];

// Default selected product
let choosenProduct = products[0];

// Select product detail elements
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Payment elements
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

/* ------------------- FUNCTIONS ------------------- */

// Change slide based on clicked menu item
function changeSlide(index) {
  wrapper.style.transform = "translateX(" + -100 * index + "vw)";
}

// Update the selected product
function updateChosenProduct(index) {
  choosenProduct = products[index];
}

// Update product text and image
function updateProductDetails() {
  currentProductTitle.textContent = choosenProduct.title;
  currentProductPrice.textContent = "$" + choosenProduct.price;
  currentProductImg.src = choosenProduct.colors[0].img;
}

// Update the displayed color boxes
function updateProductColors() {
  currentProductColors.forEach(function (color, index) {
    color.style.backgroundColor = choosenProduct.colors[index].code;
  });
}

// Setup click event for color boxes to change product image
function setupColorEvents() {
  currentProductColors.forEach(function (color, index) {
    color.addEventListener("click", function () {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });
}

// Clear size selections
function clearSizes() {
  currentProductSizes.forEach(function (size) {
    size.style.backgroundColor = "white";
    size.style.color = "black";
  });
}

// Activate selected size
function activateSize(size) {
  size.style.backgroundColor = "black";
  size.style.color = "white";
}

// Setup size click events
function setupSizeEvents() {
  currentProductSizes.forEach(function (size) {
    size.addEventListener("click", function () {
      clearSizes();
      activateSize(size);
    });
  });
}

// Handle menu item click (product change)
function setupMenuEvents() {
  menuItem.forEach(function (item, index) {
    item.addEventListener("click", function () {
      changeSlide(index);
      updateChosenProduct(index);
      updateProductDetails();
      updateProductColors();
    });
  });
}

// Show payment
function showPayment() {
  payment.style.display = "flex";
}

// Hide payment
function hidePayment() {
  payment.style.display = "none";
}

// Setup payment events
function setupPaymentEvents() {
  productButton.addEventListener("click", showPayment);
  close.addEventListener("click", hidePayment);
}

/* ------------------- INIT ------------------- */

setupMenuEvents();
setupColorEvents();
setupSizeEvents();
setupPaymentEvents();
updateProductDetails();
updateProductColors();