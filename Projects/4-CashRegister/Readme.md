# Cash Register App

This is a simple cash register application that simulates checking out a purchase, calculates the change due based on cash input, and updates the cash drawer. The app handles different denominations, provides appropriate responses if the customer doesn't have enough money or has exact change, and displays the change due in the proper denominations.

---

## Features

- **Enter Cash Amount**: User can input the amount of cash they are paying with.
- **Check Total**: Displays the total price of the item.
- **Cash Drawer**: Shows the available cash in the drawer and updates after every transaction.
- **Change Calculation**: Based on the amount paid, the app calculates and displays the change due in various denominations (Penny, Nickel, Dime, Quarter, etc.).
- **Status Messages**: Displays status messages like "INSUFFICIENT_FUNDS" or "CLOSED" when applicable.

---

## Setup

To use the Cash Register App, follow these steps:

1. **Clone the repository** (or copy the files directly):
    ```bash
    git clone <repository-url>
    ```

2. **Open the app**: Simply open the `index.html` file in any web browser to run the app.

---

## Files in the Project

- `index.html`: The main HTML structure for the app.
- `styles.css`: Contains the styles and layout for the app.
- `script.js`: JavaScript functionality that handles the logic of the app, including processing transactions, calculating change, and updating the UI.

---

## How It Works

1. The app shows a price (`$3.26` in this case) on the screen.
2. The user enters their cash amount in the input field (e.g., `$5`).
3. When the user clicks the "Purchase" button, the script processes the cash entered and determines the change due.
4. The change is calculated by the app using the available denominations in the cash drawer.
5. The app displays the change due, along with the current state of the cash drawer (showing how much cash is left after the transaction).
6. If the customer has insufficient funds, the app shows a message and resets the input.

---

## Running Locally

You can run the Cash Register app locally by following these steps:

1. Open the `index.html` file directly in your web browser (it works offline, no server is required).
2. You can modify the `price` variable in the `script.js` file to change the price of the item.

---

## Contributions

Contributions are welcome! If you'd like to suggest improvements or fix bugs, feel free to fork the repository and submit a pull request.

---

## License

This project is open source and available under the [MIT License](LICENSE).
