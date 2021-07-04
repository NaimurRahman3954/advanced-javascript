const numbers = [3, 4, 5, 6, 7];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element*element;
//   output.push(result);
// }

// const output = numbers.map(function(element) {
//   return element* element;
// })

// const output = numbers.map(x => x*x);

const output = numbers.filter(x => x>5);

console.log(output);