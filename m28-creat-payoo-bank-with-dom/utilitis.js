function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}
handleToggle('add-money-section', 'none');
handleToggle('cash-out-section', 'none');
handleToggle('transfer-section', 'none');
handleToggle('bonus-section', 'none');
handleToggle('pay-bill-section', 'none');
handleToggle('transfer-history-section', 'block');

document.getElementById('transfer-history-click').addEventListener('click', function (even) {
    even.preventDefault;
    handleToggle('add-money-section', 'none');
    handleToggle('cash-out-section', 'none');
    handleToggle('transfer-section', 'none');
    handleToggle('bonus-section', 'none');
    handleToggle('pay-bill-section', 'none');
    handleToggle('transfer-history-section', 'block');
});

function stringToNumber(idName) {
    const value = document.getElementById(idName).value;
    const result = parseInt(value);
    return result
}
function stringToNumberMb(idName) {
    const value = document.getElementById(idName).innerText;
    const result = parseFloat(value);
    return result
}