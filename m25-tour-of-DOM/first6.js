document.body.style.backgroundColor = 'rgb(145, 147, 161)';

let sections = document.querySelectorAll('section');
for (let section of sections) {
    section.style.border = '2px solid rgb(110, 108, 108)';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '8px';
    section.style.paddingLeft = '20px';
    section.style.backgroundColor = 'rgb(207, 182, 182)';
}

document.getElementById('game-container').style.backgroundColor = 'rgb(172, 184, 173)';

//add class--
document.getElementById('game-container').classList.add('text-center');
// document.getElementById('game-container').classList.remove('text-center');

