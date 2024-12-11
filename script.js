function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return b === 0 
        ? "To infinity...and beyond!" 
        : a / b;
};

function operate(first, last, operator) {
    switch (operator) {
        case "÷":
            return divide(first, last);
        case "×":
            return multiply(first, last);
        case "-":
            return add(first, last);
        case "+":
            return add(first, last);
    };
    
};

const display = document.querySelector("#display");

const re = /(?<!-)[÷×\-+]/;
const numRe = /-?\d+/;

function getExpression() {
    const operands = [...display.textContent.matchAll(/-?\d+/g)];
    const operator = display.textContent.charAt(0) == "-"
        ? display.textContent.slice(1).match(/[÷×\-+]/)
        : display.textContent.match(/[÷×\-+]/); // -18-6 = -12 bc of matchAll regex... needs fixed Or just add?
    return { first: +operands[0][0], last: +operands[1][0], operator: operator[0] }
}

const digitButtons = document.querySelectorAll(".digit");
const pointButton = document.querySelector("#point");
const operateButton = document.querySelector("#operate");
const operatorButtons = document.querySelectorAll("#operators button");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");

digitButtons.forEach(button => {
    button.addEventListener("click", () => {
        display.textContent += button.innerText;
    });
});

pointButton.addEventListener("click", () => {
    if (display.textContent.slice(-1) !== ".") {
        display.textContent += ".";
    }
});

operateButton.addEventListener("click", () => {
    const { first, last, operator } = getExpression();
    result = operate(first, last, operator);
    display.textContent = result;
});

// && !display.textContent.slice(0) === "-"

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (re.test(display.textContent) && !display.textContent.charAt(0) == "-") {
            display.textContent = display.textContent.replace(re, button.innerText);
        } else {
            display.textContent += button.innerText;
        }
    });
});

clearButton.addEventListener("click", () => {
    display.textContent = "";
});

backspaceButton.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
});

// need to add logic so only one exp at a time
// no more operators, operators in a row, etc
// add picture in picture mode