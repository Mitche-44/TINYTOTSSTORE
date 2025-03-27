
# TinyTots Store

- A colorful e-commerce site for kids' toys, clothes, and accessories.

### Author
 **MITCHELLE NGETICH.**

---

### Description
- TinyTots Store is a responsive online store featuring kid-friendly products such as toys, clothes, and books. The site uses HTML for the structure, CSS for styling, and JavaScript for interactive functionality (such as the shopping cart and product filtering). It also uses JSON to store product data, ensuring a dynamic and easy-to-maintain structure.




### Problem & Solution

 #### Problem:
- Parents often struggle to find affordable and kid-safe products online.

#### Solution:
- TinyTots Store provides a simple, visually appealing online shopping experience with filtering and cart features that make it easy for parents to find and purchase kid-friendly products.

---

### **Minimum Viable Product (MVP)**

#### **Core Features**

1. **Product Grid**
   - Displays a grid of products (including image, name, and price) loaded from a JSON file.
   - Example JSON structure:
     ```json
     {
     
      "products"[
       {
         "id": 1,
         "name": "Teddy Bear",
         "price": 10,
         "quantity":40,
         "category": "toys",
         "sold":15,
         "description": "Perfect for snuggling, with a sweet face and machine-washable fabric great for kids",
         "image":"/assets/teddy bear.jpg"
       }
      ]
     }

2. **Shopping Cart**
   - Add and remove items from the cart.
   - Displays the total cost.
   - Saves cart data in `localStorage` to persist the cart even when the page is reloaded.

3. **Basic Filters**
   - Allows users to filter products by category (e.g., "toys", "clothes").
   - Provides a search feature to search for products by name.

4. **Kid-Friendly UI**
   - Bright, playful colors and fonts (e.g., Comic Sans, Poppins).
   - Mobile-responsive design to cater to users on different devices.

---


### Technologies Used
#### HTML (Hypertext Markup Language)

- HTML provides the structure of the website, including the layout of the product grid, cart, and various sections.

- It also defines the elements such as images, text, and buttons that users interact with.

#### CSS (Cascading Style Sheets)

- CSS is used to style the website and make it visually appealing.

- Bright, kid-friendly colors and playful fonts are used to create a fun and welcoming atmosphere.

- Responsive design is implemented using media queries, ensuring the site works well on mobile devices.

#### JavaScript.

- JavaScript provides interactive functionality such as:

- Adding/removing products from the shopping cart.

- Displaying the total cost of the cart.

- Saving cart data in localStorage so the cart is preserved even when the user refreshes the page.

- Filtering products by category and searching for items by name.

#### JSON (JavaScript Object Notation)

- The product data (name, price, category, and image) is stored in a products.json file, making it easy to update and manage the products dynamically.

#### Images
- *Sneak peak of the website.*
- *Welcome to **Tiny Tots Store**, your go-to destination for adorable kids' clothing and accessories!*

![The Tiny Tots Store!](/assets/images/website-cover.jpg "Website cover")

### Project Setup Instructions
1.**Clone the repository:**
 (git clone git@github.com:Mitche-44/TINYTOTSSTORE.git)

2.**Open the project directory:**
Use the command ( cd TINYTOTSSTORE) to navigate to the project folder.

#### Link to Live Site
- The live version of TinyTots Store can be found on (http://localhost:5500).
- To access json server; type (json-server --watch db. json) on your terminal.


#### Copyright & License Information
- Copyright (c) Tiny Tots Store. All rights reserved.

- Licensed under the MIT License.




