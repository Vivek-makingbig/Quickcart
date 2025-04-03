// Base URL for images
const baseImageUrl = 'product/';

// Products categorized by section with images
const productsBySection = {
    stationary: [
        { name: "Notebook", price: "Rs. 45", image: `${baseImageUrl}Notebook.jpeg` },
        { name: "Pen", price: "Rs. 10", image:`${baseImageUrl}Pen.jpeg` },
        { name: "Pencil", price: "Rs. 5", image: `${baseImageUrl}Pencil.jpeg` },
        { name: "Eraser", price: "Rs. 3", image: `${baseImageUrl}Eraser.jpeg` },
        { name: "Sharpner", price: "Rs. 4", image: `${baseImageUrl}Sharpner.jpeg` },
        
    ],
    grocery: [
        { name: "Rice", price: "Rs. 70", image: `${baseImageUrl}Rice.jpeg` },
        { name: "Pasta", price: "Rs. 30", image: `${baseImageUrl}Pasta.jpeg` },
        { name: "Flour", price: "Rs. 35", image: `${baseImageUrl}Flour.jpeg` },
        { name: "Spices", price: "Rs. 120", image: `${baseImageUrl}Spices.jpeg` },
        { name: "Ghee", price: "Rs. 120", image: `${baseImageUrl}Ghee.jpeg` },
        
    ],
    vegetables: [
        { name: "Potato", price: "Rs. 34", image: `${baseImageUrl}Potato.jpeg` },
        { name: "Tomato", price: "Rs. 90", image: `${baseImageUrl}Tomato.jpeg` },
        { name: "Onion", price: "Rs. 67", image: `${baseImageUrl}Onion.jpeg` },
        { name: "Carrot", price: "Rs. 20", image: `${baseImageUrl}Carrot.jpeg` },
        { name: "pumpkin", price: "Rs. 25", image: `${baseImageUrl}Pumpkin.jpeg` },
        
    ],
    fruits: [
        { name: "Apple", price: "Rs. 320", image: `${baseImageUrl}Apple.jpeg` },
        { name: "Banana", price: "Rs. 120", image: `${baseImageUrl}Banana.jpeg` },
        { name: "Orange", price: "Rs. 89", image: `${baseImageUrl}Orange.jpeg` },
        { name: "Grapes", price: "Rs. 80", image: `${baseImageUrl}Grapes.jpeg` },
        { name: "Mango", price: "Rs. 20", image: `${baseImageUrl}Mango.jpeg` },
        
    ],
    electronics: [
        { name: "Headphones", price: "Rs. 1200", image: `${baseImageUrl}Headphones.jpeg` },
        { name: "Charger", price: "Rs. 867", image: `${baseImageUrl}Charger.jpeg` },
        { name: "Mouse", price: "Rs. 350", image: `${baseImageUrl}Mouse.jpeg` },
        { name: "Keyboard", price: "Rs. 270", image: `${baseImageUrl}Keyboard.jpeg` },
        { name: "Laptop", price: "Rs. 200000", image: `${baseImageUrl}Laptop.jpeg` },
        
    ]
};

// Render products by section with images
Object.keys(productsBySection).forEach(section => {
    const productContainer = document.querySelector(`#${section} .product-container`);
    productsBySection[section].forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.name}', '${product.price}')">Add to Cart</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
});
// for animated messages
const messages = [
    "Explore our wide range of stationary items for all your needs!",
    "Grab the latest gadgets and electronics at unbeatable prices!",
    "Don’t miss out on our exclusive discounts for first-time customers!",
    "Find high-quality groceries and fresh produce delivered to your door!",
    "Join our loyalty program and earn rewards on every purchase!"
];

let currentIndex = 0;

function displayMessage() {
    const messageContainer = document.getElementById("message-container");
    
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = messages[currentIndex];
    
    // Clear previous messages and append the new one
    messageContainer.innerHTML = ''; // Clear previous messages
    messageContainer.appendChild(messageElement);

    currentIndex = (currentIndex + 1) % messages.length; // Loop back to the first message
}

// Initial display
displayMessage();

// Change message every 4 seconds
setInterval(displayMessage, 10000);

// to make cart functional

// Global cart array to store added items
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    // Convert price string to a number (removing "Rs." part)
    const itemPrice = parseFloat(price.replace("Rs. ", ""));
    cart.push({ name, price: itemPrice });

    alert(`${name} has been added to your cart!`);
}

// Function to open the cart modal and display items
function openCart() {
    const cartModal = document.getElementById("cart-modal");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    // Clear the current cart items display
    cartItemsContainer.innerHTML = "";

    // Calculate the total price
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        // Create an element for each item in the cart
        const itemElement = document.createElement("p");
        itemElement.textContent = `${item.name} - Rs. ${item.price}`;
        cartItemsContainer.appendChild(itemElement);
    });

    // Update total price display
    cartTotalElement.textContent = `Total: Rs. ${total.toFixed(2)}`;

    // Show the cart modal
    cartModal.style.display = "block";
}

// Function to close the cart modal
function closeCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = "none";
}

// Select the cart link and tooltip elements
const cartLink = document.getElementById("cart-link");
const cartTooltip = document.getElementById("cart-tooltip");

// Show tooltip on mouse over
cartLink.addEventListener("mouseover", () => {
    cartTooltip.style.display = "block";
});

// Hide tooltip on mouse out
cartLink.addEventListener("mouseout", () => {
    cartTooltip.style.display = "none";
});
