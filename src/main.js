const form = document.querySelector('#task-form');
const listTag = document.querySelector('#task-list');
const KEY = 'tasks';
form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements.taskName.value);
  const inputValue = event.currentTarget.elements.taskName.value.trim();
  if (!inputValue) return;
  createMurkup(inputValue);
  addTask(inputValue);
  event.currentTarget.reset();
}

function createMurkup(value) {
  `<li>${value}</li>`;
  listTag.insertAdjacentHTML('beforeend', `<li>${value}</li>`);
}

function addTask(input) {
  const arr = JSON.parse(localStorage.getItem(KEY)) || [];
  arr.push(input);
  localStorage.setItem(KEY, JSON.stringify(arr));
}

// Отримуємо з LS дані для розмітки 

function listMemory() {
  const arr = JSON.parse(localStorage.getItem(KEY));
  if (!arr) return;

  const markupData = arr.map(item => `<li>${item}</li>`).join('');
  listTag.insertAdjacentHTML('beforeend', markupData);
}

listMemory();
