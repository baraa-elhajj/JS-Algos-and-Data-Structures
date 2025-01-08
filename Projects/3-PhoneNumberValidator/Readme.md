
# Certification Project: US Phone Number Validator

This project is a simple and modern web application that validates United States phone numbers. It is built using HTML, CSS, and JavaScript, featuring a sleek and responsive user interface.

## Features

- **User-friendly Design**: A visually appealing card layout with a clean gradient background.
- **Validation**: Supports multiple US phone number formats, including optional country codes and separators.
- **Interactive Buttons**:
  - **Check**: Validates the entered phone number.
  - **Clear**: Resets the input field and clears any displayed messages.
- **Responsive Feedback**: Displays a success or error message based on the validation result.

## Usage

1. Clone or download the project files.
2. Open the `index.html` file in any modern web browser.
3. Enter a US phone number in the input field.
4. Click the **Check** button to validate the number.
5. Click the **Clear** button to reset the form.

## Validation Rules

The application uses a regular expression to validate US phone numbers. Supported formats include:

- `(123) 456-7890`
- `123-456-7890`
- `123.456.7890`
- `1234567890`
- `+1 123-456-7890`

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling and responsive design.
- **JavaScript**: Client-side validation logic.

## How to Customize

- Modify the file `styles.css` for a different design.
- Update the regular expression in the `validatePhoneNumber` function to support additional formats.

## License

This project is open-source and free to use. Feel free to modify or distribute it as needed.