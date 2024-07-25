const DAILY_CODE = 'Race1'; // Set your daily code here

document.getElementById('submitCode').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;
    if (code === DAILY_CODE) {
        window.location.href = 'kart.html';
    } else {
        alert('Invalid code. Please try again.');
    }
});
