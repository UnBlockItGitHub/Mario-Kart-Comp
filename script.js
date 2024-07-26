document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-button');
    const submitCodeButton = document.getElementById('submit-code-button');
    const titleScreen = document.getElementById('title-screen');
    const dailyCodeScreen = document.getElementById('daily-code-screen');

    startButton.addEventListener('click', () => {
        titleScreen.classList.add('hidden');
        dailyCodeScreen.classList.remove('hidden');
    });

    submitCodeButton.addEventListener('click', () => {
        const code = document.getElementById('daily-code-input').value;
        // You can add code verification here if needed
        window.location.href = 'kart.html';
    });
});
