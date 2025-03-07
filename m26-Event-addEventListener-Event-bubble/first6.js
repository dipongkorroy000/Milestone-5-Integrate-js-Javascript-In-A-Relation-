document.body.style.backgroundColor = 'rgb(205, 204, 204)';

// document.getElementById('mouse-btn').addEventListener('mouseenter', function () {
//     console.log('event showing')
// });
//or--
// document.getElementById('mouse-btn').addEventListener('mouseout', function () {
//     console.log('event triggered')
// });
//or--
// document.getElementById('mouse-btn').addEventListener('mousemove', function () {
//     console.log('event move showing')
// });

// document.getElementById('user-name').addEventListener('focus', function () {
//     console.log('just focus and print');
// });
// document.getElementById('user-name').addEventListener('blur', function () {
//     console.log('user about to blur');
// });

// document.getElementById('key-up').addEventListener('keyup', function () {
//     console.log('keyup counting')
// });
// document.getElementById('key-down').addEventListener('keydown', function () {
//     console.log('keydown counting')
// });

// document.getElementById('key-down-target').addEventListener('keydown', function () {
//     console.log('keydown counting', event.target);
    // target-means input-field---
//     console.log('keydown counting', event.target.value);
    // target-value-means input-field-value---
// });

document.getElementById('input-delete').addEventListener('keyup', function () {
    const text = event.target.value;
    let deleteBtn = document.getElementById('delete-btn');

    document.getElementById('secret-info').style.display = 'none';
    if (text === 'delete') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
});
