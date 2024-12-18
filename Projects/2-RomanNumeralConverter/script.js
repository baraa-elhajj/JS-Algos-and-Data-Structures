// DOM Variables
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-button");
const result = document.getElementById("result-container");

// Methodes
const numberToRoman = (number) => {
    // Roman conversion logic goes here
}

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(inputInt) || inputInt <= 0 || inputInt >= 3999) {
        alert("Please provide a number strictly between 0 and 3999");
        return;
    }

    result.textContent = numberToRoman(inputInt);
};

// Event Listeners
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});