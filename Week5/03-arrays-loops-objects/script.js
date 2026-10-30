// Arrays: ordered lists of values (indexes start at 0)
let languages = ["HTML", "CSS", "JavaScript"];
console.log(languages[0], languages[1]);
console.log("Array length:", languages.length);
languages.push("Python");

function displayLanguages() {
  const list = document.getElementById("languageList");
  list.innerHTML = ""; // Clear the existing items
  for (let i = 0; i < languages.length; i++) {
    const item = document.createElement("li");
    item.textContent = languages[i];
    list.appendChild(item);
  }
}
displayLanguages();

// Objects: named properties and methods
const student = {
  name: "Alex",
  age: 22,
  university: "MDU",
  isEnrolled: true,
  introduce: function () {
    return `My name is ${this.name}.`;
  }
};
console.log(student.name, student.age);
console.log(student.introduce());
document.getElementById("studentInfo").textContent =
  `${student.name}, ${student.age}, ${student.university}`;

document.getElementById("addButton").addEventListener("click", function () {
  languages.push("C++");
  displayLanguages();
});

// A while loop
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}
