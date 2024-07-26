document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const dailyCodeContainer = document.getElementById('daily-code-container');
    const dailyCodeInput = document.getElementById('daily-code-input');
    const submitDailyCodeButton = document.getElementById('submit-daily-code');

    startButton.addEventListener('click', () => {
        // Hide the logo and start button
        startButton.classList.add('hidden');
        document.getElementById('logo').classList.add('hidden');
        
        // Show the daily code input section
        dailyCodeContainer.classList.remove('hidden');
    });

    submitDailyCodeButton.addEventListener('click', () => {
        const dailyCode = dailyCodeInput.value;
        if (dailyCode === 'Race1') { // Replace with your actual daily code
            window.location.href = 'kart.html';
        } else {
            alert('Invalid daily code. Please try again.');
        }
    });
});
