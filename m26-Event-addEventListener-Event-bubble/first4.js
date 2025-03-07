document.getElementById('btn-update-title').addEventListener('click', function () {
    document.getElementById('page-title')
        .innerText = 'Event Handler Update';
});
//again try this---
document.getElementById('from-title-btn').addEventListener('click', function () {
    const fromTitle = document.getElementById('from-title');
    fromTitle.innerText = 'from fill up successfully'
});

document.getElementById('btn-update').addEventListener('click', function () {
    // console.log('update'); //check this--
    const textInputName = document.getElementById('input-name');
    // console.log(inputName); // check this--
    const fullName = textInputName.value;
    // console.log(fullName); // check input value--
    //set the name--
    document.getElementById('title-name').innerText = fullName;

})