export function getLocalStorage(KEY) {
  return JSON.parse(localStorage.getItem(KEY));
}

export function setLocalStorage(KEY, arr) {
  localStorage.setItem(KEY, JSON.stringify(arr));
}
