document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");
    const clearCartBtn = document.getElementById("clear-cart");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const themeToggle = document.getElementById("theme-toggle");
    const filterButtons = document.querySelectorAll(".filter-btn");

    let cart = [];
    let darkMode = false;

    // Add to cart
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const price = parseFloat(this.getAttribute("data-price"));

            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
        });
    });

    // Update cart display
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
            cartItems.appendChild(li);

            total += item.price * item.quantity;
            count += item.quantity;
        });

        cartCount.textContent = count;
        cartTotal.textContent = total.toFixed(2);
    }

    // Clear cart
    clearCartBtn.addEventListener("click", function () {
        cart = [];
        updateCart();
    });

    // Dark Mode Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
