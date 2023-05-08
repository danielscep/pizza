let price = 0
const priceText = document.getElementById('pris');
priceText.textContent=`Total pris: ${price} Kr`
const products = [
  {
    name: 'Vesuvio',
    price: 109,
    img: '/../images/vesuvio.jpeg'
  },
  {
    name: 'Kebab pizza',
    price: 119,
    img: '/../images/kebab.jpeg'
  },
  {
    name: 'Pommes tallrik',
    price: 49,
    img: '/../images/pommes.jpeg'
  },
];

const productsContainer = document.getElementById('products');
productsContainer.innerHTML = '';

products.forEach(product => {
  productsContainer.innerHTML += `
    <div class="col-md">
      <div class="card">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price} Kr</p>
          <button class="btn btn-primary" onclick="addToCart(products[${products.indexOf(product)}])">Lägg till i kundvagn</button>
        </div>
      </div>
    </div>
  `;
});

let shoppingCart = [];

function addToCart(product) {
  shoppingCart.push(product);
  console.log(`Produkt ${product.name} har lagts till i kundvagnen.`);
  console.log(shoppingCart);
  price += product.price
  priceText.textContent=`Total pris: ${price} Kr`
}
