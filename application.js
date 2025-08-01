const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Load saved notes from localStorage
function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Save current notes to localStorage
function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
  const inputBox = document.createElement("p");
  const img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "./delete.png";
  img.alt = "Delete";

  inputBox.appendChild(img);
  notesContainer.appendChild(inputBox);

  inputBox.focus();
  updateStorage();
});

// Delete or auto-save note
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  }
});

// Update storage while typing
notesContainer.addEventListener("keyup", function (e) {
  if (e.target.classList.contains("input-box")) {
    updateStorage();
  }
});

// Allow new lines in note on Enter key
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
