//option-1--getElementsByTagName-->
// console.log(document.getElementsByTagName('h1'));

let liCollection = document.getElementsByTagName('li');
for (const item of liCollection) {
    console.log(item);
    // console.log(item.innerText);
}

const allHeadings = document.getElementsByTagName('h2');
for (const item of allHeadings) {
    // console.log(item);
    // console.log(item.innerText);
}