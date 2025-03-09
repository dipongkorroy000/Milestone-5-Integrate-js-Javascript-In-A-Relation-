const cBtns = document.getElementsByClassName('ring-button');
// console.log(ringButtons);

for (let cBtn of cBtns){
    cBtn.addEventListener('click', function (e) {
        console.log(e.target);
        e.target.classlist.add('border-purple-500')
    });
}