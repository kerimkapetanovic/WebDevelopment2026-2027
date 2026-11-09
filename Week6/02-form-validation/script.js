// Example 2: Form events, validation and classList
const form = document.getElementById("registration");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    message.style.display = "block";
    if (name === "" || email === "" || password.length < 6) {
        message.textContent = "Fill in all fields. Password must have at least 6 characters.";
        message.classList.add("error");
        message.classList.remove("success");
    } else {
        message.textContent = "Registration successful! Welcome, " + name + ".";
        message.classList.add("success");
        message.classList.remove("error");
    }
});

document.getElementById("toggleMessage").addEventListener("click", function () {

    message.style.display = message.style.display === "none" ? "block" : "none";
});
