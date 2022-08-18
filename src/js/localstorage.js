export function saveToLocalstorage(key, data) {
  const strigifiedData = JSON.stringify(data);
  localStorage.setItem(key, strigifiedData);
}

export function getFromLocalstorage(key) {
  const stringifiedData = localStorage.getItem(key);
  if (stringifiedData) {
    const data = JSON.parse(stringifiedData);
    return data;
  }
  return undefined;
}
