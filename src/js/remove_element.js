import { getLocalStorage, setLocalStorage } from "./LS_helpers";
import { KEY } from "./constants";
import refs from './refs';
const { listTag } = refs;

export function allListDelete (list, KEY) {
  list.addEventListener('click', removeEl);

  function removeEl(event) {
    if (event.target.nodeName !== 'BUTTON') return;
    const deleteId = event.target.parentNode.id;
    const data = getLocalStorage(KEY);
    const dataFiltered = data.filter(obj => obj.id !== deleteId);
    setLocalStorage(KEY, dataFiltered);
    event.target.parentNode.remove();
  }
}

