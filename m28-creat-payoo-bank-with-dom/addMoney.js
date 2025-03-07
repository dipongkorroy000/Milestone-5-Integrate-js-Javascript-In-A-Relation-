document.getElementById('add-money-click').addEventListener('click', function () {
    handleToggle('add-money-section', 'block');
    handleToggle('cash-out-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transfer-history-section', 'none');

    document.getElementById('add-money-btn').addEventListener('click', function (event) {
        // event.preventDefault();
        const userNumber = document.getElementById('user-number').value;
        const amount = document.getElementById('amount-money').value;
        const convertAmount = parseInt(amount);
        const Mb = stringToNumberMb('main-balance');

        if (userNumber.length === 11) {
            if (convertAmount >= 10) {
                if (stringToNumber('user-pin') === 1234) {
                    const sum = Mb + convertAmount;

                    // total money---
                    document.getElementById('main-balance').innerText = sum;

                    //history add---
                    const transactionSec = document.getElementById("history-add");

                    const history = document.createElement('p');
                    history.innerText = `Add ${amount} from ${userNumber} number.`;

                    transactionSec.appendChild(history)
                }
                else {alert('wrong pin')}}
            else {alert('inefficient money')}
        } else { alert('please check your account number') }
    })
});