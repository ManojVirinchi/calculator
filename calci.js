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
    if(b==0)
    {
        return "ERROR";
    }
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

function listener(value)
{
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
       
        if (num1 !== "") {
            if (num2 !== "") {
                
                const result = operate(parseFloat(num1), parseFloat(num2), operator);
                num1 = result.toString(); // Set result as num1
                num2 = ""; // Reset num2
            }
            operator = value; 
            updateDisplay(num1); 
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

    else if(value=="%")
    {
        if(num1!=="")
        {
            num1=num1/100;
            num2="";
            operator="";
            updateDisplay(num1);
        }

    }

    else if(value==="back" || value ==="Delete" || value==="Backspace")
    {
        if(num1!=="" && num2==="")
        {
            num1 = num1.slice(0, -1);
            updateDisplay(num1);
        }

        else if(num1!=="" && operator!=="" && num2!=="")
        {
            num2 = num2.slice(0,-1);
            updateDisplay(num2);
        }
    }

}
function main() {
    const btns = document.querySelectorAll("button");

    document.addEventListener("keydown",(event)=>{
        const temp = event.key;
        listener(temp);

    })

    btns.forEach((btn) => {
        btn.addEventListener("click", () => {
            const value = btn.textContent;
            listener(value);
            
        });
    });
}

function updateDisplay(value) {
    firstRow.textContent = value || "0";
}

main();
