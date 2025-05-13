// reduce(): accumulates the values of the array (el var) into the acc var initialized in the 2nd arg.
// Mean: The sum of all values divided by the number of values.
var getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

// Median: The middle value when the numbers are sorted. If even count, average of two middle values.
var getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b);
    const median =
        sorted.length % 2 === 0
            ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
            : sorted[Math.floor(sorted.length / 2)];
    return median;
}

// Mode: The number(s) that appear most frequently.
var getMode = (array) => {
    const counts = {};
    array.forEach((el) => {
        counts[el] = (counts[el] || 0) + 1;
    })
    if (new Set(Object.values(counts)).size === 1) {
        return null;
    }
    const highest = Object.keys(counts).sort(
        (a, b) => counts[b] - counts[a]
    )[0];
    const mode = Object.keys(counts).filter(
        (el) => counts[el] === counts[highest]
    );
    return mode.join(", ");
}

// Range: The difference between the largest and smallest values.
var getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
}

// Variance: The average of the squared differences from the mean.
var getVariance = (array) => {
    const mean = getMean(array);
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;
    return variance;
}

// Standard Deviation: The square root of the variance.
var getStandardDeviation = (array) => {
    return Math.sqrt(getVariance(array));
}

var calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el));

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
}

// DOMContentLoaded ensures all HTML content are loaded.
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('statsForm').addEventListener('submit', (e) => {
        e.preventDefault();
        calculate();
    });
});
