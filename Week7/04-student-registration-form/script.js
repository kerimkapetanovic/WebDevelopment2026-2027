const form = document.getElementById("registrationForm");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const error = document.getElementById("error");
const result = document.getElementById("result");

// Toggle between hidden and visible password.
showPassword.addEventListener("change", function () {
    if (showPassword.checked) password.type = "text";
    else password.type = "password";
});

// Enable the submit button only after accepting the terms.
terms.addEventListener("change", function () {
    submitBtn.disabled = !terms.checked;
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = password.value;
    const course = document.getElementById("course").value;
    const mode = document.querySelector('input[name="mode"]:checked').value;
    error.textContent = "";
    result.textContent = "";

    if (name === "" || email === "" || pass === "" || course === "") {
        error.textContent = "All fields are required!";
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Please enter a valid email address.";
        return;
    }
    if (pass.length < 6) {
        error.textContent = "Password must contain at least 6 characters.";
        return;
    }

    result.textContent = "Registration successful! " + name + " registered for " + course + " (" + mode + ").";
    form.reset();
    password.type = "password";
    submitBtn.disabled = true;
});
