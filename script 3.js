// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
                currentInput = '0';
                operator = null;
                previousInput = null;
                display.innerText = currentInput;
                return;
            }

            if (value === '=') {
                if (operator && previousInput !== null) {
                    currentInput = String(operate(operator, parseFloat(previousInput), parseFloat(currentInput)));
                    operator = null;
                    previousInput = null;
                    display.innerText = currentInput;
                }
                return;
            }

            if (['+', '-', '*', '/'].includes(value)) {
                if (operator && previousInput !== null) {
                    currentInput = String(operate(operator, parseFloat(previousInput), parseFloat(currentInput)));
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '0';
                return;
            }

            if (currentInput === '0') {
                currentInput = value;
            } else {
                currentInput += value;
            }

            display.innerText = currentInput;
        });
    });

    function operate(operator, a, b) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    }
});
