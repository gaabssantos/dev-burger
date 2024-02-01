// Elements
const btnShowMenu = document.querySelector(".show-menu");
const btnApplyDiscount = document.querySelector(".apply-discount");
const btnTotalOrder = document.querySelector(".total-order");
const btnFilter = document.querySelector(".filter");

const burgerContainer = document.querySelector(".burger-container");

const container = document.querySelector(".container");

const priceBurger = document.querySelector(".price-burger");

const showMenu = (products) => {
  burgerContainer.innerHTML = "";

  products.forEach((burger) => {
    const priceInReal = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(burger.price);

    burgerContainer.innerHTML += `<div class="burger">
      <img src="${burger.src}" alt=${burger.name}">
      <h2 class="name-burger">${burger.name}</h2>
      <p class="price-burger">${priceInReal}</p>
    </div> `;
  });
};

const applyDiscount = () => {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }));

  showMenu(newPrices);
};

const calculateTotal = () => {
  const totalValue = menuOptions.reduce(
    (acc, currentValue) => acc + currentValue.price,
    0
  );

  const priceValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(totalValue);

  burgerContainer.innerHTML = `<div class="total">
        <h3>A soma de todos os itens do menu é ${priceValue}</h3>
     </div>`;
};

const filterBurger = () => {
  const filter = menuOptions.filter((product) => product.vegan);
  showMenu(filter);
};

btnShowMenu.addEventListener("click", () => showMenu(menuOptions));
btnApplyDiscount.addEventListener("click", applyDiscount);
btnTotalOrder.addEventListener("click", calculateTotal);
btnFilter.addEventListener("click", filterBurger);