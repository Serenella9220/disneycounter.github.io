var count = 0;

function incrementCounter() {
    count++;
    updateDisplay();
}

function decrementCounter() {
    if (count > 0) {
        count--;
        updateDisplay();
    }
}

function resetCounter() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("counter").textContent = count;
}

function playBackgroundMusic() {
    var soundtrack = document.getElementById("soundtrack");
    soundtrack.play();
}

function startCounter() {
    var startButton = document.getElementById("startButton");
    startButton.style.display = "none";

    var counterContainer = document.getElementById("counter-container");
    counterContainer.style.display = "block";

    playBackgroundMusic();

    var buttons = document.getElementById("buttons");
    buttons.style.display = "flex";

    var videoBackground = document.getElementById("video-background");
    videoBackground.style.display = "flex";

    var title = document.getElementById("title");
    title.style.display = "flex";

    var soundtrack = document.getElementById("soundtrack");
    soundtrack.style.display = "flex";
}
