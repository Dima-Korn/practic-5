const form = document.querySelector('#task-form');
const listTag = document.querySelector('#task-list');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements.taskName.value);
  const inputValue = event.currentTarget.elements.taskName.value.trim();
  if (!inputValue) return;
  createMurkup(inputValue);
   event.currentTarget.reset();
}

function createMurkup(value) {
  `<li>${value}</li>`;
  listTag.insertAdjacentHTML( 'beforeend', `<li>${value}</li>`);
}
