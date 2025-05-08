const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date(); // gets the current date object
const day = date.getDate(); // gets the day of the month
const month = date.getMonth() + 1; // gets the number of the month (starts from 0)
const year = date.getFullYear();
const hours = date.getHours(); // gets the hour in the 24 hr format
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

    switch (dateOptionsSelectElement.value) {
        case "yyyy-mm-dd":
            currentDateParagraph.textContent = formattedDate
                .split("-")
                .reverse()
                .join("-");
            break;
        case "mm-dd-yyyy-h-mm":
            currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
            break;
        default:
            currentDateParagraph.textContent = formattedDate;
    }
});
