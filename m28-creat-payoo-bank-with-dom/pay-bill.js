
document.getElementById('pay-bill-click').addEventListener('click', function (even) {
    even.preventDefault;
    handleToggle('add-money-section', 'none');
    handleToggle('cash-out-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('bonus-section', 'none');
    handleToggle('pay-bill-section', 'block');
    handleToggle('transfer-history-section', 'none');
});
