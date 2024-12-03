// const n = document.getElementById("input");
// function button(input) {
//     n.value += input
// }
// function inputClear() {
//     n.value = "";
// }
// function calculate() {
//     n.value = eval(n.value)
// }

let inputField;

// Function to initialize the calculator (ensure the element is ready)
function initializeCalculator() {
    inputField = document.getElementById("input");
}

// Function to display numbers and operators in the input field
function button(value) {
    if (inputField) {
        inputField.value += value;
    }
}

// Function to clear the input field
function inputClear() {
    if (inputField) {
        inputField.value = "";
    }
}

// Function to evaluate the expression in the input field
function calculate() {
    try {
        if (inputField) {
            inputField.value = eval(inputField.value); // Evaluate the input
        }
    } catch (error) {
        inputField.value = "Error"; // Display an error if the expression is invalid
    }
}
