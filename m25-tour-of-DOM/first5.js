document.body.style.backgroundColor = 'rgb(100, 100, 100)';

document.getElementsByClassName('fruits-container')[0].style.backgroundColor = 'rgb(192, 140, 192)';

let FruitsTitle = document.getElementById('fruits-title-id');
FruitsTitle.style.color = 'red';
FruitsTitle.style.textAlign = 'center';
FruitsTitle.style.backgroundColor = 'white'


//finding-class-or-id---
// console.log(FruitsTitle.getAttribute('class'));
//alternative--
// console.log(FruitsTitle.classList);
//remove class attribute---
FruitsTitle.classList.remove('blue-bg')
//add class attribute---
FruitsTitle.classList.add('red-bg');

// document.getElementById('fruits-title-id').innerText = 'favorite fruits container';

//hover-tool---
// FruitsTitle.setAttribute('title', 'tooltip set by javascript');



// document.getElementsByClassName('fruits-container')[0].innerHTML = '<h2>DOM was changing</h2>';


console.log(document.getElementsByClassName('fruits-container')[0].innerHTML);
console.log(document.getElementsByClassName('fruits-container')[0].innerText);
