/* Have a pre-populated (hard coded) array of objects as products.
Your product display should have (not limited to) product image, product name, product price
All products should be displayed when the page loads
Using an ‘add to cart’ button, the user should be able to add the products to a shopping cart list
The shopping cart lists all products and displays a the total price

Stretch Goals

The user should also be able to delete the products from the cart, thus modifying the total price of the cart
The user should be able to enter a quantity for each product

The code should be readable, reusable, and easy to modify. We're looking for production quality code.
A detailed Readme file which includes the following: 
Setup instructions - Write out all of the steps to run your app locally
Discussion of technologies used - Make a list of the technologies you used including frameworks and libraries.
A section describing the requirements and how you met them.
*/

/*
Step 1: Create a HTML structure of the app. A little forsight, knowing we're gonna use bootstrap cards and bootstrap offCanvas
*/
//const offCanvasBody = document.querySelector('.offcanvas-body');
let cart = [];

const addToCartButtons = document.getElementsByClassName('addToCartButton');
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function (event) {
        event.preventDefault();
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == event.target.id) {
                if (!cart.includes(products[i])) {
                    cart.push(products[i]);
                }
            }
        }

        renderCart();
    })
}

function renderCart() {
    const offCanvasBody = document.querySelector('.offcanvas-body');
    offCanvasBody.innerHTML = ""; // clears the shopping list to apply updates if needed.

    for (let i = 0; i < cart.length; i++) {
        const cartItem = cart[i];
        offCanvasBody.innerHTML += `
        <div class="card">
            <div class="row g-0 align-items-center">
                <div class="col-5 p-1">
                    <img src="${cartItem.imageURL}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-7">
                    <div class="card-body">
                        <h6 class="card-title">${cartItem.name}</h6>
                        <p class="card-text">$${cartItem.price}</p>
                        <button id=${cartItem.id} class="deleteFromCartButton btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>`;
    }

    const deleteFromCartButtons = document.getElementsByClassName('deleteFromCartButton');
    for (let i = 0; i < deleteFromCartButtons.length; i++) {
        deleteFromCartButtons[i].addEventListener('click', function (event) {
            event.preventDefault();
            cart = cart.filter(item => item.id != event.target.id);
            renderCart();
        });
    }

    calculateCartTotalPrice()
}

function calculateCartTotalPrice() {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].price;
    }

    const totalPriceElement = document.querySelector('#totalPrice');
    totalPriceElement.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
}