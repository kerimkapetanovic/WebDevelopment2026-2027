// 1. Click events: update a counter
let count = 0;
function updateCounter() {
  document.getElementById("counter").textContent = count;
}

document.getElementById("increase").addEventListener("click", function () {
  count++;
  updateCounter();
});
document.getElementById("decrease").addEventListener("click", function () {
  count--;
  updateCounter();
});
document.getElementById("reset").addEventListener("click", function () {
  count = 0;
  updateCounter();
});

// 2. Input event: update the greeting while typing
document.getElementById("name").addEventListener("input", function (event) {
  const name = event.target.value;
  document.getElementById("nameOutput").textContent = name || "Guest";
});

// 3. Mouse events: change a box's color and text
const box = document.getElementById("colorBox");
box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "lightgreen";
  box.textContent = "Mouse is inside!";
});
box.addEventListener("mouseout", function () {
  box.style.backgroundColor = "lightblue";
  box.textContent = "Move your mouse over this box!";
});

// 4. Form submission: prevent the default page reload
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  document.getElementById("formMessage").textContent =
    `Form submitted with email: ${email}`;
});
