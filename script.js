document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const menuScreen = document.getElementById("menuScreen");
    const submitCode = document.getElementById("submitCode");
    const background = document.querySelector(".background");
    const fadeToWhite = document.getElementById("fadeToWhite");

    const dailyCode = "Race1";  // Daily Code

    startButton.addEventListener("click", function() {
        document.querySelector(".title-screen").style.display = "none";
        menuScreen.style.display = "flex";
        background.style.filter = "blur(10px)";
    });

    submitCode.addEventListener("click", function() {
        const userInput = document.getElementById("dailyCode").value;
        if (userInput === dailyCode) {
            fadeToWhite.style.opacity = 1;
            setTimeout(() => {
                window.location.href = "kart.html";
            }, 1000); // Wait for the fade effect before redirecting
        } else {
            alert("Invalid code. Please try again.");
        }
    });
});
