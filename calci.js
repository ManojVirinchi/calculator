function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let num1 = "";
let num2 = "";
let operator = "";
const firstRow = document.querySelector(".firstrow");

function operate(a, b, op) {
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Invalid";
    }
}

function main() {
    const btns = document.querySelectorAll("button");

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const value = btn.textContent;

            if (!isNaN(value) || value === ".") {
                // Handle number and decimal inputs
                if (operator === "") {
                    // First number
                    num1 += value;
                    updateDisplay(num1);
                } else {
                    // Second number
                    num2 += value;
                    updateDisplay(num2);
                }
            } else if (value === "+" || value === "-" || value === "*" || value === "/") {
                // Handle operator
                if (num1 !== "") {
                    if (num2 !== "") {
                        // Perform calculation if both numbers are entered
                        const result = operate(parseFloat(num1), parseFloat(num2), operator);
                        num1 = result.toString(); // Set result as num1
                        num2 = ""; // Reset num2
                    }
                    operator = value; // Set the new operator
                    updateDisplay(num1); // Display the current num1 (result or first number)
                }
            } else if (value === "=") {
                // Handle equals
                if (num1 !== "" && num2 !== "" && operator !== "") {
                    const result = operate(parseFloat(num1), parseFloat(num2), operator);
                    num1 = result.toString(); 
                    num2 = "";
                    operator = "";
                    updateDisplay(num1);
                }
            } else if (value === "AC") {
                // Clear everything
                num1 = "";
                num2 = "";
                operator = "";
                updateDisplay("0");
            }
        });
    });
}

function updateDisplay(value) {
    firstRow.textContent = value || "0";
}

// Initialize the calculator
main();
