
// Selecting elements using IDs and CSS selectors
const title = document.getElementById("title");
const paragraph = document.querySelector("#description");
const listItems = document.querySelectorAll("li");
console.log(title, paragraph, listItems);

// Change the text of an existing element
document.getElementById("changeText").addEventListener("click", function () {
  paragraph.textContent = "The text has changed!";
});

// Direct styling and toggling a CSS class
document.getElementById("changeStyle").addEventListener("click", function () {
  title.style.color = "blue";
  title.style.fontSize = "40px";
  paragraph.classList.toggle("highlight");
});

// Switch dark mode on and off
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Create a new list item
document.getElementById("addItem").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "New item";
  document.getElementById("myList").appendChild(newItem);
});

// textContent inserts plain text; innerHTML parses HTML markup.
// Avoid inserting untrusted user input using innerHTML.


// ========================================
// NEW EXAMPLE: DOM Content Properties
// ========================================

const example = document.getElementById("example");
const output = document.getElementById("output");

// Reading the properties
console.log("innerHTML:", example.innerHTML);
// Hello <strong>World</strong>!

console.log("textContent:", example.textContent);
// Hello World!

console.log("nodeValue:", example.nodeValue);
// null (because example is an HTML element)

console.log("firstChild.nodeValue:", example.firstChild.nodeValue);
// Hello (first text node)


// 1. innerHTML - interprets HTML tags
document.getElementById("innerButton").addEventListener("click", function () {
  output.innerHTML = "Hello <strong>World</strong>!";
});


// 2. textContent - treats HTML tags as plain text
document.getElementById("textButton").addEventListener("click", function () {
  output.textContent = "Hello <strong>World</strong>!";
});


// 3. nodeValue - changes the value of a text node
document.getElementById("nodeButton").addEventListener("click", function () {

  const output = document.getElementById("output");
  textNode = output.firstChild.nodeValue;
  // Replace existing content with a single text node
  output.textContent = "Original text";

  // Access the text node inside the paragraph
  const textNode = output.firstChild;

  // Change the text node directly
  textNode.nodeValue = "Changed using nodeValue!";
});


const paragraph1 = document.getElementById("example1");

// nodeValue of the paragraph
console.log("nodeValue:", paragraph1.nodeValue);

// nodeValue of the first child
console.log("firstChild.nodeValue:", paragraph1.firstChild.nodeValue);

// nodeValue of the first element child
console.log("firstElementChild:", paragraph1.firstElementChild);


