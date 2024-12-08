// DOM Variables
const checkButton = document.getElementById("check-btn");

// Palindrome Methods
const isAlphaNumericChar = (char) => {
    const regex = /[a-z0-9]/;
    return regex.test(char);
}

const removeNonAlphaNumericChars = (text) => {
    for (const char of text) {
        if (!isAlphaNumericChar(char)) {
            text = text.replace(char, '');
        }
    }
    return text;
}

const isPalindrome = (text) => {
    const textArray = Array.from(text);
    while (textArray.length > 1) {
        const firstChar = textArray.shift();
        const lastChar = textArray.pop();

        if (firstChar !== lastChar) {
            return false;
        }
    }
    return true;
}

const checkTextInput = () => {
    const textInput = document.getElementById("text-input");
    let textInputValue = textInput.value.toLowerCase();
    let result = document.getElementById("result");
    result.innerText = "";

    if (textInput.value === "") {
        textInput.reportValidity();
        return;
    }

    textInputValue = removeNonAlphaNumericChars(textInputValue);
    if (isPalindrome(textInputValue)) {
        result.innerText = `${textInput.value} is a Palindrome!`;
    }
    else {
        result.innerText = `${textInput.value} is NOT a Palindrome!`;
    }
    textInput.value = "";
}

// Event Listeners
checkButton.addEventListener("click", checkTextInput);