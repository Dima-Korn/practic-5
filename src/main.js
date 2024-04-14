import { nanoid } from 'nanoid';
import { getLocalStorage, setLocalStorage } from './js/LS_helpers';
import { KEY } from './js/constants';
import refs from './js/refs';
const { form, listTag } = refs;

listTag.addEventListener('click', removeEl);
form.addEventListener('submit', submitForm);

function removeEl(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const deleteId = event.target.parentNode.id;
  const data = getLocalStorage(KEY);
  const dataFiltered = data.filter(obj => obj.id !== deleteId);
  setLocalStorage(KEY, dataFiltered);
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
  const arr = getLocalStorage() || [];
  const id = nanoid();
  console.log(id);
  arr.push({ id, text: input });
  setLocalStorage(KEY, arr);
  createMurkup(input, id);
}

// Отримуємо з LS дані для розмітки

function listMemory() {
  const arr = getLocalStorage(KEY);
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
