document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const submitCodeButton = document.getElementById('submit-code-button');
    const dailyCodeInput = document.getElementById('daily-code-input');
    const overlay = document.getElementById('overlay');
    const dailyCodeSection = document.getElementById('daily-code-section');
    
    const DAILY_CODE = "Race1";  // Set your daily code here

    startButton.addEventListener('click', () => {
        overlay.classList.remove('hidden');
        dailyCodeSection.classList.remove('hidden');
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
