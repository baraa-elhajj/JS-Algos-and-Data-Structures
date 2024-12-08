// DOM Variables
const checkButton = document.getElementById("checkBtn");

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
    let textInputValue = document.getElementById("textInput").value;
    if (textInputValue === "") {
        alert("You should add something first!");
        return;
    }

    textInputValue = removeNonAlphaNumericChars(textInputValue);
    if (isPalindrome(textInputValue.toLowerCase())) {
        alert(`${textInputValue} is a Palindrome`);
    }
    else {
        alert(`${textInputValue} is not a Palindrome`);
    }
}

// Event Listeners
checkButton.addEventListener("click", checkTextInput);