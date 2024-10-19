function frequencyCounter(arr) {
  const mapObj = new Map();
  for (const item of arr) {
    console.log(item);
    mapObj.set(item, (mapObj.get(item) || 0) + 1);
  }
  return mapObj;
}

console.log(frequencyCounter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(
  frequencyCounter(["apple", "banana", "cherry", "apple", "orange", "banana"])
);
console.log(frequencyCounter(["a", "b", "a"]));
