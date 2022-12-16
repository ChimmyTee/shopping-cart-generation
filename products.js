const products = [
    {
        id: 1,
        name: 'Washing Machine',
        price: 9.99,
        description: 'washes clothes',
        imageURL: 'https://th.bing.com/th/id/R.5ff1405d20cbc684c0a514af4c1ac292?rik=Zqi3i3TipeHYSw&riu=http%3a%2f%2fhyderabadboss.com%2fwp-content%2fuploads%2f2016%2f12%2famsungwashingmachine.jpg&ehk=QaC0%2fJ1cSJ%2fVoAtiM7J0e3mtdiuo91QqOpCk6ePN00I%3d&risl=&pid=ImgRaw&r=0'
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
                <label for="quantity">Quantity:</label>
                <input name="quantity" type="number">
            
                <button id=${product.id} class="addToCartButton btn btn-primary mt-2" type="submit">Add to Cart</button>
            </form>
        </div>
    </div>`
    })

    const productCardWrap = document.getElementById('productCardWrap');
    return (productCardWrap.innerHTML = displayProducts);
}

render();