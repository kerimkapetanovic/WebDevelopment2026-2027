const noteInput = document.getElementById("note");
const storageType = document.getElementById("storageType");
const message = document.getElementById("message");

function getStorage() {
    if (storageType.value === "local") {
        return localStorage;
    } else {
        return sessionStorage;
    }
}

// Save the note in the selected storage.
document.getElementById("saveBtn").addEventListener("click", function () {
    const note = noteInput.value.trim();
    if (note === "") {
        message.textContent = "Please enter a note.";
        return;
    }
    const storage = getStorage();
    storage.setItem("studentNote", note);
    message.textContent = "Note saved successfully!";
});

// Load a previously saved note.
document.getElementById("loadBtn").addEventListener("click", function () {
    const storage = getStorage();
    const savedNote = storage.getItem("studentNote");
    if (savedNote === null) {
        message.textContent = "No saved note found.";
    } else {
        noteInput.value = savedNote;
        message.textContent = "Note loaded!";
    }
});

// Remove the note from the selected storage.
document.getElementById("deleteBtn").addEventListener("click", function () {
    const storage = getStorage();
    storage.removeItem("studentNote");
    noteInput.value = "";
    message.textContent = "Note deleted!";
});
