document.getElementById('transfer-money-click').addEventListener('click', function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cash-out-section', 'none');
    handleToggle('transfer-section', 'block');
    handleToggle('bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transfer-history-section', 'none');
});

document.getElementById('transfer-btn').addEventListener('click', function () {
    const userNumber = document.getElementById('user-number-t').value;
    const amount = document.getElementById('amount-money-t').value;
    const convertAmount = parseInt(amount);
    const Mb = stringToNumberMb('main-balance');

    if (userNumber.length === 11) {
        if (convertAmount <= Mb && convertAmount >=10) {
            if (stringToNumber('user-pin-t') === 1234) {
                let sub = Mb - convertAmount;
                document.getElementById('main-balance').innerText = sub;

                //history add---
                const transactionSec = document.getElementById('history-add');

                const history = document.createElement('p');
                history.innerText = `Transfer money ${convertAmount} this number ${userNumber}`;

                transactionSec.appendChild(history);
            }else{alert('wrong pin')}
        }else{alert('inefficient balance')}
    }else{alert('check user number')}
})