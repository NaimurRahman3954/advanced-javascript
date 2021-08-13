const numbers = [3, 4, 5, 6, 7]; // we wanna square all the elements and push them to 'output' array.
const output = [];

// traditional method
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element*element;
  output.push(result);
}

// using map
const output = numbers.map(function(element) {
  return element* element;
})

// using map and array function
const output = numbers.map(x => x*x);

console.log(output);


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// using filter
const output = numbers.filter(x => x>5); // shows numbers that are greater than 5

console.log(output);