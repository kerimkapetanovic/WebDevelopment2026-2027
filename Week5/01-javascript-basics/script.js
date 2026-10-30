// Variables and data types
let studentName = "Alex";  // String
let age = 22;             // Number
const university = "MDU";
let city = "Västerås";
let year = 2026;
let isStudent = true;     // Boolean
let result = null;
var result1 = "JS"

// Console output
console.log(studentName, age, university);
console.log("Hello, " + studentName);
console.log(`Hello, ${studentName}!`);
console.log(city, year, isStudent, result);

// Arithmetic operators
let a = 10;
let b = 3;
console.log(a + b, a - b, a * b, a / b, a % b);

// Modify an HTML element
// 'defer' ensures this element exists when the script runs.
document.getElementById("message").textContent =
  `Hello, my name is ${studentName}!`;

age = 23;
console.log("Updated age:", age);
// university = "Another University"; // Error: const cannot be reassigned
