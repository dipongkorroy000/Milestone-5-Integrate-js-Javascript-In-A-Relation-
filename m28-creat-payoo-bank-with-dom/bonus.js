document.getElementById('bonus-click').addEventListener('click', function () {
    handleToggle('add-money-section', 'none');
    handleToggle('cash-out-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('bonus-section', 'block');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transfer-history-section', 'none');
});

document.getElementById('bonus-btn').addEventListener('click', function () {
    const bonusCode = document.getElementById('user-bonus-code').value;
    convertBonusCode = parseInt(bonusCode);
    console.log(convertBonusCode, typeof convertBonusCode);
    if (convertBonusCode  === 1122 || convertBonusCode === 4321) {
        alert('expire this code');
    } else {
        alert('please type bonus code');
    }
})