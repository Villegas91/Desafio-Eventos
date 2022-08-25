//ARRAY DE OFERTAS
let products = [
  {
    id: 0,
    marca: "Lenovo",
    precio: 100000,
    img: "https://st2.depositphotos.com/1164721/6301/i/600/depositphotos_63016343-stock-photo-laptop-with-smart-phone-on.jpg",
  },
  {
    id: 1,
    marca: "Dell",
    precio: 150000,
    img: "https://st2.depositphotos.com/1164721/6301/i/600/depositphotos_63016343-stock-photo-laptop-with-smart-phone-on.jpg",
  },
  {
    id: 2,
    marca: "Exo",
    precio: 200000,
    img: "https://st2.depositphotos.com/1164721/6301/i/600/depositphotos_63016343-stock-photo-laptop-with-smart-phone-on.jpg",
  },
  {
    id: 3,
    marca: "Apple",
    precio: 300000,
    img: "https://st2.depositphotos.com/1164721/6301/i/600/depositphotos_63016343-stock-photo-laptop-with-smart-phone-on.jpg",
  },
];

//FUNCION PARA AGREGAR LAS CARTS DE OFERTAS
products.forEach((products) => {
  let div = document.createElement("div");

  div.innerHTML = `<div class="cards">
      <div class="img"><img src="https://st2.depositphotos.com/1164721/6301/i/600/depositphotos_63016343-stock-photo-laptop-with-smart-phone-on.jpg"></div>
      <div >id :${products.id}</div>
      <div class="description"><p> ${products.marca}</p>
      <div class="costo"> $ ${products.precio}</div></div>
      <button onclick="addToCart(${products.id});">Agregar</button>
      
      </div>`;

  document.getElementById("ofertas").appendChild(div);
});

let cart = [];

function addToCart(id) {
  const foundProduct = products.find((item) => item.id == id);
  console.log(foundProduct);
  cart.push(foundProduct);
  renderCart();
}

function renderCart() {
  cart.forEach((products) => {
    const div = document.createElement("div");

    div.innerHTML = `<div class="info">
    <p>Marca: ${products.marca}</p>
    <p>Precio: ${products.precio}</p>
    </div>
    `;

    document.getElementById("cart").appendChild(div);
  });
}
