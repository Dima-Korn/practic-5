import { nanoid } from 'nanoid';
import { getLocalStorage, setLocalStorage } from './js/LS_helpers';
import { KEY } from './js/constants';
import refs from './js/refs';
import { listMemory } from './js/list_memory';
import './js/remove_element'
const { form, listTag } = refs;

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
  listTag.insertAdjacentHTML(
    'beforeend',
    `<li id='${id}'>${value} <button type="button">X</button></li>`
  );
}

function addTask(input) {
  const arr = getLocalStorage(KEY) || [];
  const id = nanoid();
  console.log(id);
  arr.push({ id, text: input });
  setLocalStorage(KEY, arr);
  createMurkup(input, id);
}

// Отримуємо з LS дані для розмітки

listMemory(listTag, KEY);
