const productCart = document.querySelector('.cart');
const unitQuantity = document.querySelector('.unit-quantity');
const unitPrice = document.querySelector('.unit-price');
const totalPriceAll = document.querySelectorAll('.total-price');
const subTotal = document.querySelector('.sub-value');

let total = 0;
const incPrice = e => {
  let initial_quantity = +e.target.parentElement.nextElementSibling.textContent;
  if (initial_quantity < 5) {
    initial_quantity++;
    e.target.parentElement.nextElementSibling.textContent = initial_quantity;
    total =
      e.target.parentElement.parentElement.nextElementSibling.textContent *
      initial_quantity;
    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent =
      total.toFixed(2);
  } else {
    alert(`E don finish`);
  }
};

const decPrice = e => {
  let initial_quantity =
    +e.target.parentElement.previousElementSibling.textContent;
  if (initial_quantity > 1) {
    initial_quantity--;
    e.target.parentElement.previousElementSibling.textContent =
      initial_quantity;
    total =
      total -
      e.target.parentElement.parentElement.nextElementSibling.textContent;
    e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.textContent =
      total.toFixed(2);
  }
};

const getTotal = () => {
  let sub = [];
  Array.from(totalPriceAll).forEach(price => {
    sub.push(Number(price.textContent));
    return sub;
  });

  result = sub.reduce((a, b) => {
    return a + b;
  }, 0);

  console.log(result.toFixed(2));
  subTotal.innerHTML = `<span>$</span>${result.toFixed(2)}`;
};

getTotal();

productCart.addEventListener('click', e => {
  if (e.target.classList.contains('fa-plus-circle')) {
    incPrice(e);
    getTotal();
  }

  if (e.target.classList.contains('fa-minus-circle')) {
    decPrice(e);
    getTotal();
  }
});
