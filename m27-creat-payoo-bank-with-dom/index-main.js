document.getElementById('add-money-click').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('Cash-out-section').style.display = 'none';
    document.getElementById('Transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transfer-history-section').style.display = 'none';

    document.getElementById('add-money-btn').addEventListener('click', function (event) {
        event.preventDefault();
        const amountMoney = document.getElementById('amount-money').value;
        const userPin = document.getElementById('user-pin').value;
        const mainBalance = document.getElementById('main-balance').innerText;
        const userNumber = document.getElementById('user-number').value;
        if (userNumber.length == 11) {
            if (userPin && amountMoney) {
                if (parseInt(userPin) === 1234) {
                    const totalMoney = parseFloat(mainBalance) + parseFloat(amountMoney)
                    document.getElementById('main-balance').innerText = totalMoney;
                }
                else {
                    alert('wrong pin')
                }
            }
            else {
                alert('enter money')
            }
        } else {
            alert('please check your account number')
        }
    });
});
document.getElementById('Cash-out-click').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('Cash-out-section').style.display = 'block';
    document.getElementById('Transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transfer-history-section').style.display = 'none';

    document.getElementById('withdraw-btn').addEventListener('click', function () {
        const userNumber = document.getElementById('user-number-w').value;
        const userPin = document.getElementById('user-pin-w').value;
        const mainBalance = document.getElementById('main-balance').innerText;
        const amountMoney = document.getElementById('amount-money-w').value;
        if (userNumber.length === 11) {
            if (amountMoney) {
                if (parseInt(userPin) === 1234) {
                    if (parseFloat(mainBalance) > parseFloat(amountMoney)) {
                        let totalMoney = parseFloat(mainBalance) - parseFloat(amountMoney);
                        document.getElementById('main-balance').innerText = totalMoney
                    }else {
                        alert('check your total money')
                    }
                }else {
                    alert('wrong pin')
                }
            }else {
                alert('please type your money')
            }
        }else {
            alert('please check your account number')
        }
    })
});
document.getElementById('bonus-click').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('Cash-out-section').style.display = 'none';
    document.getElementById('Transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'block';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transfer-history-section').style.display = 'none';
});
document.getElementById('Transfer-money-click').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('Cash-out-section').style.display = 'none';
    document.getElementById('Transfer-section').style.display = 'block';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transfer-history-section').style.display = 'none';
});
document.getElementById('pay-bill-click').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('Cash-out-section').style.display = 'none';
    document.getElementById('Transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'block';
    document.getElementById('transfer-history-section').style.display = 'none';
});
document.getElementById('transfer-history-click').addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('Cash-out-section').style.display = 'none';
    document.getElementById('Transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('transfer-history-section').style.display = 'block';
});




