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
    return a / b;
};

function operate(first, last, operator) {
    switch (operator) {
        case "÷":
            return divide(first, last);
        case "×":
            return multiply(first, last);
        case "-":
            return subtract(first, last);
        case "+":
            return add(first, last);
    };
    
};

const display = document.querySelector("#display");

display.textContent.split(/\D/);

function getExpression() {
    const re = /[^\d.]/;
    const operands = display.textContent.split(re);
    const operator = display.textContent.match(re);
    return { first: +operands[0], last: +operands[1], operator: operator[0] }
}

const buttons = document.querySelectorAll("#calculator button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        switch (button.id) {
            case "clear":
                display.textContent = "";
            case "backspace":
                display.textContent = display.textContent.slice(0, -1);
                break;
            case "operate":
                const { first, last, operator } = getExpression();
                result = operate(first, last, operator);
                display.textContent = result;
                break
            default:
                display.textContent += button.innerText;
        }
    });
});