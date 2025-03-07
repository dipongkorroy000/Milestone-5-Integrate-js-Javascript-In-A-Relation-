//1. where to add---
let hobbyList = document.getElementById('hobby-list');
//2. what to be added--
let listItem = document.createElement('li');
listItem.innerText = 'income money';
//3.add the child--
hobbyList.appendChild(listItem);

//1.where to add--
let mainContainer = document.getElementById('main-container');
//2 what to be added--
const section = document.createElement('section');
const h2Tag = document.createElement('h2');
h2Tag.innerText = 'My food list';


const ulDiv = document.createElement('ul');
const liNew = document.createElement('li');
const liNew2 = document.createElement('li');
liNew.innerText = 'sea food';
liNew2.innerText = 'vegetables';
ulDiv.appendChild(liNew);
ulDiv.appendChild(liNew2);


section.appendChild(h2Tag);
section.appendChild(ulDiv);


mainContainer.appendChild(section);

//alternative-TYPE---->
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h2> My dress section</h2>
<ul>
    <li>T-shirt</li>
    <li>pant</li>
    <li>lungi</li>
</ul>
`
mainContainer.appendChild(sectionDress);