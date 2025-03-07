function makeRed() {
    document.body.style.background = 'red';
}
function makeWhite() {
    document.body.style.background = 'white';
}

//alternative---
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
}

//alternative---
let btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

//alternative---
/**
 * structure-
 * document.getElementById().addEventListener('event type, handler')
 */
document.getElementById('btn-make-green').addEventListener('click', function () {
    document.body.style.backgroundColor = 'green';
});
