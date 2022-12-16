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
