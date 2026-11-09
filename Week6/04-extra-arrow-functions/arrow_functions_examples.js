
// 1. Same result, different syntax
function multiply(a, b) {
    return a * b;
}

const multiplyArrow = (a, b) => a * b;

console.log("Regular function:", multiply(4, 5));
console.log("Arrow function:", multiplyArrow(4, 5));

// 2. 'this' inside an object
const student = {
    name: "Amar",

    greet: function () {
        console.log("Regular function - this.name:", this.name); // Amar

        // Arrow function uses 'this' from the surrounding greet() function.
        const sayHello = () => {
            console.log("Nested arrow function - this.name:", this.name); // Amar
        };

        sayHello();
    }
};

const studentArrow = {
    name: "Amar",

    greet: () => {
        console.log("Arrow function - this.name:", this.name);
    }
};

student.greet();
studentArrow.greet();

// 3. 'this' in click event listeners
// Create three buttons automatically, so no extra HTML is needed.
const container = document.createElement("div");
container.style.margin = "20px";
container.innerHTML = "<h3>Regular vs Arrow Functions - Click Examples</h3>";
document.body.appendChild(container);

const regularButton = document.createElement("button");
regularButton.textContent = "Regular function (this)";
container.appendChild(regularButton);

regularButton.addEventListener("click", function () {
    this.style.backgroundColor = "lightgreen";
    console.log("Regular listener: this === regularButton:", this === regularButton); // true
});

const arrowButton = document.createElement("button");
arrowButton.textContent = "Arrow function (button variable)";
arrowButton.style.marginLeft = "10px";
container.appendChild(arrowButton);

arrowButton.addEventListener("click", () => {
    // Arrow functions do not get their own 'this' from addEventListener.
    arrowButton.style.backgroundColor = "lightgreen";
});

const eventButton = document.createElement("button");
eventButton.textContent = "Arrow function (event.currentTarget)";
eventButton.style.marginLeft = "10px";
container.appendChild(eventButton);

eventButton.addEventListener("click", (event) => {
    event.currentTarget.style.backgroundColor = "lightgreen";
    console.log("event.currentTarget === eventButton:", event.currentTarget === eventButton); // true
});

// Key idea:
// Regular function: 'this' depends on HOW the function is called.
// Arrow function: no own 'this'; it uses 'this' from WHERE it was defined.
