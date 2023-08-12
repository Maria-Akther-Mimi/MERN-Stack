function doubleNumbers(numbers) {
    const doubledArray = numbers.map(number => number * 2);
    return doubledArray;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]