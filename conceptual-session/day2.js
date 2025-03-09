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


