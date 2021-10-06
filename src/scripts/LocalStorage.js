export function Save(list) {
  const stringList = JSON.stringify(list);
  localStorage.setItem("list", stringList);
}

export function Load(key) {
  const list = localStorage.getItem(key);
  const parsedList = JSON.parse(list) ?? [];
  return parsedList;
}
