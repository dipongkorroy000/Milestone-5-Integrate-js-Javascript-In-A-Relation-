document.body.style.border = '2px solid red';
document.body.style.margin = '2px';
document.getElementsByTagName('section')[0].style.border = '2px solid yellowGreen';
document.getElementsByTagName('section')[0].style.margin = '2px';
document.getElementsByTagName('ol')[0].style.border = '2px, solid, purple';
document.getElementsByTagName('ol')[0].style.margin = '2px';

let listItem = document.getElementById('ol-handler').getElementsByTagName('li');
for (let i = 0; i < listItem.length; i++){
    listItem[i].style.border = '1px solid orange';
    listItem[i].style.margin = '2px'
}

//list item-2 click handler---
document.getElementById('item-2')
    .addEventListener('click', function (event) {
        console.log('item-2-clicked');
        // event.stopPropagation()
        event.stopImmediatePropagation()
});
document.getElementById('item-2')
    .addEventListener('click', function (event) {
        console.log('item-2-double-clicked');
        event.stopPropagation()
});
document.getElementById('item-2')
    .addEventListener('click', function (event) {
        console.log('item-2-third-clicked');
        event.stopPropagation()
});
//ol click handler---
document.getElementById('ol-handler')
    .addEventListener('click', function () {
    console.log('ol clicked')
    });
//section click handler--
document.getElementById('section-handler')
    .addEventListener('click', function () {
    console.log('section clicked')
    });
//body click handler---
document.getElementById('body-handler')
    .addEventListener('click', function () {
    console.log('body clicked')
});