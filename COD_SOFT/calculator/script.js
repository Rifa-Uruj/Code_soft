// Append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    // Prevent starting with a zero if it's not followed by a decimal point
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
    display.focus();
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Calculate the result based on the current display value
function calculate() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;
        // Handle modulus by replacing `%` with `/100`
        expression = expression.replace(/%/g, '/100');
        // Evaluate the expression
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}

// Update display to handle live calculations or just validate input
function updateDisplay() {
    const display = document.getElementById('display');
    try {
        let expression = display.value;
        // Handle modulus by replacing `%` with `/100`
        expression = expression.replace(/%/g, '/100');
        // Evaluate the expression for live updates
        if (expression) {
            display.value = eval(expression);
        }
    } catch (error) {
        // Allow for invalid input without crashing
    }
}
