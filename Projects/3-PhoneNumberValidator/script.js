function validatePhoneNumber() {
    const phoneInput = document.getElementById('phone').value;
    const message = document.getElementById('message');

    if (phoneInput === '') {
        message.textContent = 'Please enter a phone number!';
        message.className = 'message invalid';
        return;
    }

    // Regular expression for validating US phone numbers
    const regex = /^(\+1[- ]?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

    if (regex.test(phoneInput)) {
        message.textContent = 'Valid US phone number!';
        message.className = 'message valid';
    } else {
        message.textContent = 'Invalid US phone number!';
        message.className = 'message invalid';
    }
}

function clearInput() {
    document.getElementById('phone').value = '';
    document.getElementById('message').textContent = '';
}