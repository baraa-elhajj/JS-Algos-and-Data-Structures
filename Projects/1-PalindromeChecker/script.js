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

// Testing ...
let text = "never odd or even";
console.log(`text: ${text}`);
text = text.toLowerCase();
console.log(`toLowerCase(): ${text}`);
text = removeNonAlphaNumericChars(text);
console.log(`removeNonAlphaNumericChars(): ${text}`);
console.log(`isPalindrome(): ${isPalindrome(text)}`);