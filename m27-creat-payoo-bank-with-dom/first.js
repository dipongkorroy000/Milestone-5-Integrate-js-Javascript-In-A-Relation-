document.getElementById('login-btn')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const userNumber = document.getElementById('user-number').value;
        const userPin = document.getElementById('user-pin').value
        // console.log(typeof userPin); //just check this---
        if (userNumber.length === 11) {
            if (parseInt(userPin) === 1234) {
               window.location.href = './index-main.html'
            }
            else {
                alert('wrong pin')
            }
        }
        else {
            alert('need valid account number')
        }

})