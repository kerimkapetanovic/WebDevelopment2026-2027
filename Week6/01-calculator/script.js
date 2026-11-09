// Example 1: Functions, parameters, conditions and DOM
function calculate(a, b, operation) {
    if (operation === "add") return a + b;
    if (operation === "subtract") return a - b;
    if (operation === "multiply") return a * b;
    if (operation === "divide") {
        if (b === 0) return null;
        return a / b;
    }
}

document.getElementById("calculate").addEventListener("click", function () {
    const firstInput = document.getElementById("first").value;
    const secondInput = document.getElementById("second").value;
    const operation = document.getElementById("operation").value;
    const result = document.getElementById("result");

    if (firstInput === "" || secondInput === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    const answer = calculate(Number(firstInput), Number(secondInput), operation);
    result.textContent = answer === null ? "Cannot divide by zero." : "Result: " + answer;
});
