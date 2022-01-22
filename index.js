const sumItems = function(array) {
  // Sum all the numbers in the array
  if (Array.isArray(array[0])) {
    sumItems(array[0]);
  }

  if (array.length === 0) return 0;
  else return array[0] + sumItems(array.splice(1));
};

console.log(typeof sumItems([[]]));
console.log(sumItems([1, 2, 3, 4, 5]));
console.log(sumItems([1, []]));
console.log(sumItems([1, 2, [[3],4], 5, []]));
module.exports = sumItems;