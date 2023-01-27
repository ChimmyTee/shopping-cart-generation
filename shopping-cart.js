let cart = [];

// addEventListener to each product's "Add to Cart" button.
const addToCartButtons = document.getElementsByClassName('addToCartButton');
for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', function (event) {
        event.preventDefault();

        // ensures that each button maps with the correct product before adding product into cart.
        // also prevents cart having duplicate items in the cart.
        // 'products' variable from products.js
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == event.target.id) {
                // if, first time adding product to cart.
                if (!cart.includes(products[i])) {
                    cart.push(products[i]);
                    let quantity = document.getElementById(`quantity-${products[i].id}`).value;
                    products[i].quantity = quantity;
                    // console.log(cart);
                }
                // else, just change the quantity only.
                else {
                    let quantity = document.getElementById(`quantity-${products[i].id}`).value;
                    products[i].quantity = quantity;
                    // console.log(cart);
                }
            }
        }

        // this renderCart here is used to make sure the cart is up to date when it first loads.
        renderCart();
    })
}

function renderCart() {
    const offCanvasBody = document.querySelector('.offcanvas-body');
    offCanvasBody.innerHTML = ""; // clears the shopping list to apply updated cart.

    // create a card for each items in the cart.
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
                        <h6 class="card-title">${cartItem.name} x ${cartItem.quantity}</h6>
                        <p class="card-text">$${(cartItem.price*cartItem.quantity).toFixed(2)}</p>
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
        totalPrice += cart[i].price*cart[i].quantity;
    }

    const totalPriceElement = document.querySelector('#totalPrice');
    totalPriceElement.innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
}
