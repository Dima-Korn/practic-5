import { nanoid } from 'nanoid';

const form = document.querySelector('#task-form');
const listTag = document.querySelector('#task-list');
const KEY = 'tasks';
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements.taskName.value);
  const inputValue = event.currentTarget.elements.taskName.value.trim();
  if (!inputValue) return;
  
  addTask(inputValue);
  event.currentTarget.reset();
}

function createMurkup(value, id) {
  listTag.insertAdjacentHTML('beforeend', `<li id='${id}'>${value}</li>`);
}

function addTask(input) {
  const arr = JSON.parse(localStorage.getItem(KEY)) || [];
  const id = nanoid();
  console.log(id);
  arr.push({ id , text: input });
  localStorage.setItem(KEY, JSON.stringify(arr));
  createMurkup(input, id);
}

// Отримуємо з LS дані для розмітки 

function listMemory() {
  const arr = JSON.parse(localStorage.getItem(KEY));
  if (!arr) return;

  const markupData = arr.map(({ id , text }) => `<li id='${id}'>${text}</li>`).join('');
  listTag.insertAdjacentHTML('beforeend', markupData);
}

listMemory();
