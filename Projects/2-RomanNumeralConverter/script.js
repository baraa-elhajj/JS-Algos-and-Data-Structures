// DOM Variables
let numberInput = document.getElementById("number-input");
let convertBtn = document.getElementById("convert-button");
let result = document.getElementById("result-container");

const romanDigitsArr = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
];

// Methodes
const numberToRoman = (number) => {
    const result = [];
    romanDigitsArr.forEach(digitArr => {
        while (number >= digitArr[1]) {
            result.push(digitArr[0]);
            number -= digitArr[1];
        }
    });

    return result.join("");
}

const checkUserInput = () => {
    const inputInt = parseInt(numberInput.value);

    if (!numberInput.value || isNaN(inputInt) || inputInt <= 0 || inputInt > 3999) {
        alert("Please provide a number between 1 and 3999");
        return;
    }

    result.textContent = numberToRoman(inputInt);
    result.style.display = "block";
};

// Event Listeners
convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkUserInput();
    }
});