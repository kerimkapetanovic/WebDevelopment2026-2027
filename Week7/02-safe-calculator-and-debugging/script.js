// Calculate a result or throw an error for invalid operations.
function calculate(a, b, operation) {
    console.log("Calculating:", a, b, operation);
    if (operation === "add") return a + b;
    if (operation === "divide") {
        if (b === 0) throw new Error("Cannot divide by zero!");
        return a / b;
    }
    throw new Error("Unknown operation!");
}

document.getElementById("calculateBtn").addEventListener("click", function () {
    const rawNum1 = document.getElementById("num1").value;
    const rawNum2 = document.getElementById("num2").value;
    const operation = document.getElementById("operation").value;
    const result = document.getElementById("result");
    try {
        if (rawNum1 === "" || rawNum2 === "") throw new Error("Both numbers are required!");
        const a = Number(rawNum1);
        const b = Number(rawNum2);
        if (!Number.isFinite(a) || !Number.isFinite(b)) throw new Error("Please enter valid numbers!");
        const answer = calculate(a, b, operation);
        console.log("Result:", answer);
        console.table([{ a: a, b: b, result: answer }]);
        result.textContent = "Result: " + answer;
        result.style.color = "green";
    } catch (error) {
        console.error("Error:", error.message);
        result.textContent = error.message;
        result.style.color = "red";
    } finally {
        console.info("Calculation attempt finished.");
    }
});

console.log("Script loaded successfully.");
console.warn("Remember to validate user input!");
