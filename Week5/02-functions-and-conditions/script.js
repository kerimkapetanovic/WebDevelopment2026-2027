// Function without parameters
function sayHello() {
  return "Hello, welcome to JavaScript!";
}

// Function with parameters and a return value
function calculateArea(width, height) {
  return width * height;
}
console.log("Area:", calculateArea(5, 3));

document.getElementById("greetButton").addEventListener("click", function () {
  document.getElementById("greeting").textContent = sayHello();
});

// Conditions: if, else if, else
function checkGrade(score) {
  if (score >= 90) return "Grade A";
  else if (score >= 75) return "Grade B";
  else if (score >= 60) return "Grade C";
  else return "Failed";
}

document.getElementById("checkButton").addEventListener("click", function () {
  const rawScore = document.getElementById("score").value;
  const score = Number(rawScore);
  const result = document.getElementById("result");

  // Empty input and out-of-range values are not valid scores.
  if (rawScore.trim() === "" || !Number.isFinite(score) || score < 0 || score > 100) {
    result.textContent = "Please enter a valid score.";
    return;
  }
  result.textContent = checkGrade(score);
});
