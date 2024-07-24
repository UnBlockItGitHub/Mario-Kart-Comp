document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const menuScreen = document.getElementById("menuScreen");
    const submitCode = document.getElementById("submitCode");

    startButton.addEventListener("click", function() {
        document.querySelector(".title-screen").style.display = "none";
        menuScreen.style.display = "flex";
    });

    submitCode.addEventListener("click", function() {
        const dailyCode = document.getElementById("dailyCode").value;
        if (dailyCode) {
            window.location.href = "kart.html";
        } else {
            alert("Please enter the daily code.");
        }
    });
});
