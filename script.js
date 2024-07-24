document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const menuScreen = document.getElementById("menuScreen");
    const submitCode = document.getElementById("submitCode");

    const dailyCode = "Race1";  // Set your daily code here

    startButton.addEventListener("click", function() {
        document.querySelector(".title-screen").style.display = "none";
        menuScreen.style.display = "flex";
    });

    submitCode.addEventListener("click", function() {
        const userInput = document.getElementById("dailyCode").value;
        if (userInput === dailyCode) {
            window.location.href = "kart.html";
        } else {
            alert("Invalid code. Please try again.");
        }
    });
});
