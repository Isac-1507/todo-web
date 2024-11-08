import { update } from "firebase/database";
import { convertTimestamp } from "./getTime.js";
import { updateTodoStatus } from "./index.js";
import { db } from "./firebaseConfig.js";
import { deleteTodoItem } from "./index.js";

export function displayTodos(todos) {
  const entriesContainer = document.getElementById("todo");
  if (!entriesContainer) {
    console.error('No element found with ID todo')
    return;
  }
  entriesContainer.innerHTML = "";

  for (const [key, todo] of Object.entries(todos)) {
    const li = document.createElement("li");
    const readableDate = convertTimestamp(key);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = key;
    checkbox.name = 'todo'
    checkbox.value = todo.Todo;
    checkbox.checked = todo.completed || false;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault()
      deleteTodoItem(key);
      entriesContainer.innerHTML = "";
    })
    checkbox.addEventListener('change', (e) => {
      e.preventDefault()
      updateTodoStatus(key, checkbox.checked)
    })

    const label = document.createElement('label');
    label.htmlFor = key;
    label.textContent = `${readableDate}: ${todo.Todo}`;

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(deleteButton)
    entriesContainer.appendChild(li);
  }
}


