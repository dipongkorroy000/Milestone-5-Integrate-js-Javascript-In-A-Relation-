document.body.style.backgroundColor = 'rgb(245, 243, 227)';

// const items = document.getElementsByClassName('item');
// for (let item of items) {
//     item.addEventListener('click', function (event) {
//         // console.log(item); // it's just element--
//         // console.log(item.innerText);
//         // console.log(event.target); // it's click target event element---
//         // console.log(event.target.parentNode);
//         // event.target.parentNode.removeChild(event.target)
//     })
// }

document.getElementById('item-list').addEventListener('click', function () {
    // console.log(event.target);
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('add-item-btn').addEventListener('click', function () {
    const orderList = document.getElementById('item-list');

    const listItem = document.createElement('li');
    listItem.classList.add('item');
    listItem.innerText = 'Brand new item added';

    orderList.appendChild(listItem);
});
