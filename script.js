document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const submitCodeButton = document.getElementById('submit-code-button');
    const dailyCodeInput = document.getElementById('daily-code-input');

    const DAILY_CODE = "Race1";  // Set your daily code here

    startButton.addEventListener('click', () => {
        const enteredCode = dailyCodeInput.value;
        if (enteredCode === DAILY_CODE) {
            window.location.href = 'kart.html';
        } else {
            alert('Incorrect code. Please try again.');
        }
    });

    submitCodeButton.addEventListener('click', () => {
        const enteredCode = dailyCodeInput.value;
        if (enteredCode === DAILY_CODE) {
            window.location.href = 'kart.html';
        } else {
            alert('Incorrect code. Please try again.');
        }
    });
});
