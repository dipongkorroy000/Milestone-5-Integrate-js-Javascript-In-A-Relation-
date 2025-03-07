document.getElementById('cash-out-click').addEventListener('click', function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cash-out-section', 'block');
    handleToggle('transfer-section', 'none');
    handleToggle('bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transfer-history-section', 'none');

    document.getElementById('withdraw-btn').addEventListener('click', function () {
        document.getElementById('withdraw-btn').setAttribute('disabled', true);
        const userNumber = document.getElementById('user-number-w').value;
        const amount = document.getElementById('amount-money-w').value;
        const convertAmount = parseInt(amount);
        const Mb = stringToNumberMb('main-balance');

        if (userNumber.length === 11) {
            if (Mb > convertAmount && 20 <= convertAmount) {
                if (stringToNumber('user-pin-w') === 1234) {
                    const sub = Mb - convertAmount;

                    //subtraction money--
                    document.getElementById('main-balance').innerText = sub;

                    // history add---
                    const transactionSec = document.getElementById("history-add");
                    const history = document.createElement('p');

                    history.innerText = `Cash Out ${amount} Send to ${userNumber} number.`;

                    transactionSec.appendChild(history)

                }else {alert('wrong pin')}
            }else {alert('inefficient balance')}
        } else { alert('please check your account number') }
        document.getElementById('withdraw-btn').removeAttribute('disabled');
    })
});