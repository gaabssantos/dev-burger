// Elements
const btnShowMenu = document.querySelector(".show-menu");
const btnApplyDiscount = document.querySelector(".apply-discount");
const btnTotalOrder = document.querySelector(".total-order");
const btnFilter = document.querySelector(".filter");
const burgerContainer = document.querySelector(".burger-container");

function showMenu() {
  menuOptions.forEach((burger) => {
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
}

function applyDiscount() {
  menuOptions.map((discount) => {
    discount.price = discount.price + discount.price * 0.1;
    console.log(discount.price);
    return discount;
  });
}

btnShowMenu.addEventListener("click", showMenu);
btnApplyDiscount.addEventListener("click", applyDiscount);
