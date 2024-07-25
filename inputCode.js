document.getElementById('submitCode').addEventListener('click', function() {
    const code = document.getElementById('codeInput').value;
    if (code) {
        window.location.href = 'kart.html';
    } else {
        alert('Please enter a code.');
    }
});
