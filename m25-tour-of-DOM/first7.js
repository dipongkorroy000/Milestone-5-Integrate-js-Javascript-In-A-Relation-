document.body.style.backgroundColor = 'rgb(148, 144, 164)'

// console.log(document.getElementById('game-container'));
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);
// console.log(document.body.childNodes[1].childNodes[3]);
//alternative--
// console.log(document.querySelector('#game-container ul'));

//add list item-game-container--
// let gameContainerUl = document.querySelector('#game-container ul');
// let listItem = document.createElement('li')
// listItem.innerText = 'add for check this';

// gameContainerUl.appendChild(listItem);

//again ---
let fruitContainer = document.querySelector('.fruits-container ul');
let listItem2 = document.createElement('li');
listItem2.innerText = 'banana add again check this';
fruitContainer.appendChild(listItem2);

console.log(listItem2.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode);
