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

function operate(first, operator, last) {
    switch (operator) {
        case "+":
            add(first, last);
        case "-":
            subtract(first, last);
        case "*":
            multiply(first, last);
        case "/":
            divide(first, last);
        default:
            break;
    };
};

