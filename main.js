const numberHere = document.getElementById("numberHere");
const showButton = document.getElementById("showBtn");
const resetButton = document.getElementById("resetBtn");
let number;

function generateNumber() {
    number = Math.floor(Math.random() * 10);
    numberHere.textContent = number;
}

function startGame() {
    generateNumber();
    let guess;
    while (guess !== number) {
        guess = Number(prompt("Guess the number..."));
        if (guess < number) {
            numberHere.textContent = "Too low, try again.";
        } else if (guess > number) {
            numberHere.textContent = "Too high, try again.";
        } else {
            numberHere.textContent = `You guessed the number: ${number}`;
        }
    }
}

showButton.addEventListener("click", startGame);
resetButton.addEventListener("click", () => {
    numberHere.textContent = "***";
});

