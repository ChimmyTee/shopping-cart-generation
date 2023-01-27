const products = [
    {
        id: 1,
        name: 'Washing Machine',
        price: 9.99,
        description: 'washes clothes',
        imageURL: 'https://th.bing.com/th/id/OIP.X_FAXSDLxoTApRSvTBrCkgHaHa?pid=ImgDet&rs=1'
    },
    {
        id: 2,
        name: 'Rice Cooker',
        price: 19.99,
        description: 'cooks rice easily',
        imageURL: 'https://th.bing.com/th/id/OIP.6Q0cCpq6QVKfMemoq8KwyAHaHa?pid=ImgDet&rs=1'
    },
    {
        id: 3,
        name: 'Microwave',
        price: 15.44,
        description: 'heat wave sensation',
        imageURL: 'https://www.betta.com.au/media/catalog/product/P/A/PANASONIC_MICROWAVE_NNSF574SQPQ_IPN420361.A.JPG'
    },
];

function render() {
    let displayProducts = "";

    products.map((product) => {
        displayProducts += `<div class="card p-1" style="width: 18rem;">
        <img src="${product.imageURL}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${product.name}</h4>
            <h6 class="card-price">Price: $${product.price}</h6>
            <p class="card-text text-truncate"">${product.description}</p>
            <form>
                <label for="quantity-${product.id}">Quantity:</label>
                <input id="quantity-${product.id}" type="number" min="1" max="50" value="1">
                <button id=${product.id} class="addToCartButton btn btn-primary mt-2" type="submit">Add to Cart</button>
            </form>
        </div>
    </div>`
    })

    const productCardWrap = document.getElementById('productCardWrap');
    return (productCardWrap.innerHTML = displayProducts);
}

render();