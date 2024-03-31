import { nanoid } from 'nanoid';

const form = document.querySelector('#task-form');
const listTag = document.querySelector('#task-list');
const KEY = 'tasks';

listTag.addEventListener('click', removeEl);
form.addEventListener('submit', submitForm);

function removeEl(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const deleteId = event.target.parentNode.id;
  const data = JSON.parse(localStorage.getItem(KEY));
  const dataFiltered = data.filter(obj => obj.id !== deleteId);
  localStorage.setItem(KEY, JSON.stringify(dataFiltered));
  event.target.parentNode.remove();
}

function submitForm(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements.taskName.value);
  const inputValue = event.currentTarget.elements.taskName.value.trim();
  if (!inputValue) return;

  addTask(inputValue);
  event.currentTarget.reset();
}

function createMurkup(value, id) {
  listTag.insertAdjacentHTML(
    'beforeend',
    `<li id='${id}'>${value} <button type="button">X</button></li>`
  );
}

function addTask(input) {
  const arr = JSON.parse(localStorage.getItem(KEY)) || [];
  const id = nanoid();
  console.log(id);
  arr.push({ id, text: input });
  localStorage.setItem(KEY, JSON.stringify(arr));
  createMurkup(input, id);
}

// Отримуємо з LS дані для розмітки

function listMemory() {
  const arr = JSON.parse(localStorage.getItem(KEY));
  if (!arr) return;

  const markupData = arr
    .map(
      ({ id, text }) =>
        `<li id='${id}'>${text} <button type="button">X</button></li>`
    )
    .join('');
  listTag.insertAdjacentHTML('beforeend', markupData);
}

listMemory();
