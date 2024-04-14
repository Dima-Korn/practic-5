import { getLocalStorage } from "./LS_helpers";

export function listMemory(list ,KEY) {
    const arr = getLocalStorage(KEY);
    if (!arr) return;
  
    const markupData = arr
      .map(
        ({ id, text }) =>
          `<li id='${id}'>${text} <button type="button">X</button></li>`
      )
      .join('');
    list.insertAdjacentHTML('beforeend', markupData);
  }