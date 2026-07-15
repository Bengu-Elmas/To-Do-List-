const form = document.getElementById("to-do-textbox");
const input = document.getElementById("to-do-text");
const todoList = document.getElementById("to-do-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const taskTest = input.value;
  const errorMessage = document.getElementById("error-message");

  input.addEventListener("input", () => {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "";
  });

  if (taskTest.trim() === "") {
    errorMessage.textContent = "⚠︎ Please Enter A Task ᯓ★ˎˊ˗";
    return;
  }

  const newItem = document.createElement("li");
  newItem.className = "todo-item";

  const textSpan = document.createElement("span");
  textSpan.className = "todo-item-text";
  textSpan.textContent = taskTest;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "completeButton";
  completeBtn.addEventListener("click", () => {
    textSpan.classList.toggle("completed");
    if (textSpan.classList.contains("completed")) {
      completeBtn.style.display = "none";
    } else {
      completeBtn.style.display = "inline-block";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "𝘅";
  deleteBtn.className = "deleteButton";
  deleteBtn.addEventListener("click", () => {
    newItem.remove();
  });

  newItem.appendChild(textSpan);
  newItem.appendChild(completeBtn);
  newItem.appendChild(deleteBtn);
  todoList.appendChild(newItem);

  input.value = "";
});
