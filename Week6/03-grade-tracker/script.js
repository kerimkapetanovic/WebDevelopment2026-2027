// Example 3: Arrays, objects, push(), for loops and DOM
const students = [];

function showStudents() {
    const list = document.getElementById("students");
    list.innerHTML = "";
    let total = 0;

    // OPTION 1: Regular for loop

    /*for (let i = 0; i < students.length; i++) {
        const item = document.createElement("li");
        item.textContent = students[i].name + ": " + students[i].grade;
        list.appendChild(item);
        total += students[i].grade;
    }*/


    // OPTION 2: forEach() with arrow function
    students.forEach((student) => {
        const item = document.createElement("li");
        item.textContent = student.name + ": " + student.grade;
        list.appendChild(item);
        total += student.grade;
    });

    const average = students.length === 0
        ? "—"
        : (total / students.length).toFixed(2);

    document.getElementById("summary").textContent =
        "Students: " + students.length + " | Average grade: " + average;

}

document.getElementById("add").addEventListener("click", function () {
    const name = document.getElementById("studentName").value.trim();
    const rawGrade = document.getElementById("grade").value;
    const grade = Number(rawGrade);
    const error = document.getElementById("error");

    if (name === "" || rawGrade === "" || !Number.isInteger(grade) || grade < 1 || grade > 5) {
        error.textContent = "Enter a name and a whole-number grade from 1 to 5.";
        return;
    }
    error.textContent = "";
    students.push({ name: name, grade: grade });
    showStudents();
});
