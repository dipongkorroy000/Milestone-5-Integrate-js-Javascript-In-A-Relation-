const cBtns = document.getElementsByClassName("ring-button");
// console.log(cBtns);


for (let cBtn of cBtns) {
  cBtn.addEventListener("click", (e) => {
    for (let c of cBtns) {
      c.classList.remove("border-purple-600");
    }
    e.target.classList.add("border-purple-600");

    const color = e.target.id.replace("-color", "");
    const productImg = document.getElementById("product-image");
    // productImg.src = "./images/gray.png";
    productImg.src = "./images/" + color + ".png";
    // console.log(productImg);
  });
}

const selectWristSize = (model) => {
  const sizes = ["S", "M", "L", "XL"];
  for (let element of sizes) {
    const btn = document.getElementById("size-" + element);
    if (element === model) {
      btn.classList.add("border-purple-600");
    } else {
      btn.classList.remove("border-purple-600");
    }
  }
};

const qtEle = document.getElementsByClassName("quantity-btn");
for (let btn of qtEle) {
  btn.addEventListener("click", (e) => {
    const amount = e.target.innerText === "+" ? 1 : -1;

    const plusAndM = document.getElementById("quantity");
    const stringToNum = parseInt(plusAndM.innerText);

    const newQuantity = Math.max(0, stringToNum + amount);
    plusAndM.innerText = newQuantity;
  });
}

// let cartCount = 0;
let cartItems = [];
document.getElementById("add-to-cart").addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").innerText);
  document.getElementById("quantity").innerText = 0;
  if (quantity > 0) {
    document.getElementById("checkout-container").classList.remove("hidden");
    // cartCount += quantity;
    document.getElementById("cart-count").innerText = quantity;
      
    // checkout box ---
    const cBtns = document.querySelector('button.border-purple-600.w-7');
    const cBtn = cBtns.id.split('-')[0];
    // console.log(cBtn);

    const modelBtns = document.querySelector('button.border-purple-600:not(.w-7)');
    const mBtnSize = modelBtns.innerText.split(' ')[0];
    const mBtnPrice = modelBtns.innerText.split(' ')[1].split('$')[1];
    // console.log(mBtnSize, mBtnPrice);

    cartItems.push({
      image: cBtn + '.png',
      title: 'Classy Modern Smart Watch',
      color: cBtn,
      size: mBtnSize,
      quantity:quantity,
      price: quantity * parseInt(mBtnPrice)
    });
    // console.log(cartItems); 
  }
  else {
    alert("please select a quantity");
  }
});


let productImage = "./images/";
document.getElementById('checkout-btn').addEventListener('click', () => {
  const cartModel = document.getElementById('cart-modal');
  const cartContainer = document.getElementById('cart-items')

  let totalQua = 0;
  let totalPri = 0;

  for (let item of cartItems) {
    // console.log(item);
    const row = document.createElement('tr');
    row.classList.add('border-b');
    row.innerHTML = `
    <td>
    <div class = "flex items-center space-x-2">
    <img class = "w-10 h-10 rounded-md p-1" src = "${productImage}${item.image}" />
    <span class = "font-semibold">${item.title}</span>
    </div>
    </td>
    <td class = "px-4 py-2 font-semibold">${item.color}</td>
    <td class = "px-4 py-2 font-semibold">${item.size}</td>
    <td class = "px-4 py-2 font-semibold">${item.quantity}</td>
    <td class = "px-4 py-2 font-semibold">${item.price}</td>
    `;
    cartContainer.appendChild(row);
    totalQua += parseInt(`${item.quantity}`);
    totalPri += parseInt(`${item.price}`);
  }
  // console.log(totalQua);
  cartModel.classList.remove('hidden');

  let totalQuantity = document.getElementById('total-quantity');
  totalQuantity.innerText = totalQua;
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = totalPri;

})

document.getElementById('continue-shopping').addEventListener('click', () => {
  document.getElementById('cart-modal').classList.add('hidden');
  document.getElementById('cart-items').innerText = '';
})
