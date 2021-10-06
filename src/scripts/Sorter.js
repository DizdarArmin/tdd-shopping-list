export function sortByName(list) {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}

export function sortByPrice(list) {
  return [...list].sort((a, b) => a.price - b.price);
}
