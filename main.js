const userInput = document.getElementById("input");
const checkButton = document.getElementById("checkBtn");
const numHere = document.getElementById("numberHere");
const generateButton = document.getElementById("generateBtn");
const resetButton = document.getElementById("resetBtn");
let number;

function generateNumber() {
    number = Math.floor(Math.random() * 10);
    numHere.textContent = "***";
    userInput.value = "";
}

generateButton.addEventListener("click", generateNumber);

function checkGuess() {
    const guess = Number(userInput.value);

    if (guess < number) {
        numHere.textContent = "Too low, try again";
    } else if (guess > number) {
        numHere.textContent = "Too high, try again";
    } else if (guess === number) {
        numHere.textContent = `You guessed correctly, the number is ${number}`;
    } else {
        numHere.textContent = "Please enter valid number";
    }
    userInput.value = "";
}

checkButton.addEventListener("click", checkGuess);

resetButton.addEventListener("click", () => {
    numHere.textContent = "***";
    userInput.value = "";
});




