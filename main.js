const apiUrl = 'http://localhost:3000/products'; // my local API endpoint for db.json
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  fetchProducts();

  // Initialize search functionality
  setupSearch();
});


// Fetch all products from the db.json file
//This function fetches data from an API asynchronously, checks if the response is successful, parses the data as JSON, and then calls another function to display it. If any error occurs, it logs the error to the console.
async function fetchProducts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch products');
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error(error);
  }
}

// Render products to the page
function renderProducts(products) {
  const productGrid = document.getElementById('productGrid');
  productGrid.innerHTML = '';

  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <p>${product.description}</p>
      <button onclick="addToCart({ id: ${product.id}, name: '${product.name}', price: ${product.price} })">Add to Cart</button>
      <button onclick="deleteProduct(${product.id})">Delete</button>
      <button onclick="editProduct(${product.id})">Edit</button>
    `;
    productGrid.appendChild(div);
  });
}

 // Search  functionality
 function setupSearch() {
 const searchInput = document.getElementById('search');
  console.log(searchInput);
  
 const searchBtn = document.getElementById('search-btn')

 console.log(searchBtn);
 
 //  Verify elements exist
 if (!searchInput || !searchBtn) {
  console.error("Search elements not found!");
  return;
}

 // Search when button is clicked
 searchBtn.addEventListener('click', performSearch);
  
   
  async function performSearch() {
   const search = (searchInput.value);
   console.log(search);
   

   try {
     // Fetch all products first
     const response = await fetch(apiUrl);
     if (!response.ok) throw new Error('Failed to fetch products');
     const allProducts = await response.json();
     
     // Filter products based on search term
     const filteredProducts = allProducts.filter(product => 
       product.name.toLowerCase().includes(search) ||
       product.description.toLowerCase().includes(search)
     );
     
     // Render filtered products
     renderProducts(filteredProducts);
     
   } catch (error) {
     console.error('search error:', error);
   }
 }

 }

// Add to Cart functionality

function addToCart(product) {
  cart.push(product); //push() is an array method that adds a new element to the end of the array
  localStorage.setItem('cart', JSON.stringify(cart)); // saves the updated cart to localStorage
  renderCart();
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Render Cart
//renderCart() updates the DOM to display the list of items currently in the cart, along with a total price. Each item is shown with its name, price, and a "Remove" button. The total price of all items in the cart is calculated and displayed.
function renderCart() {
  const cartItemsContainer = document.getElementById('cartItems');
  
  const totalPriceElement = document.getElementById('totalPrice');
  
  cartItemsContainer.innerHTML = '';
  
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${item.id})">Remove</button>`;
    cartItemsContainer.appendChild(li); // Add the li element to the cartItemsContainer 
    total += item.price;
  });

  totalPriceElement.textContent = total.toFixed(2);//ensures that the total price is formatted to two decimal places
}


// Edit a product (PATCH request)
async function editProduct(productId) {
  const updatedData = {
    price: 25 // For example, change the price to 25
  };

  try {
    const response = await fetch(`${apiUrl}/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    if (!response.ok) throw new Error('Failed to update product');
    alert('Product updated successfully!');
    fetchProducts(); // Refresh product list
  } catch (error) {
    console.error(error);
  }
}


