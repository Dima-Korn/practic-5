const form = document.querySelector('#task-form');
const listTag = document.querySelector('#task-list');

form.addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements.taskName.value);
  const inputValue = event.currentTarget.elements.taskName.value.trim();
  if (!inputValue) return;
  event.currentTarget.reset();
}
