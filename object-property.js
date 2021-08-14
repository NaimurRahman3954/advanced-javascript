const students = [
  {id: 21, name: "Omar Sunny"},
  {id: 22, name: "Mahiya Mahi"},
  {id: 28, name: "Shuvo"}, 
  {id: 32, name: "Sakib Khan"}
]

const output = [];

//  conventional method
for (let i = 0; i < students.length; i++) {
  const element = students[i].name;
  output.push(element);
}console.log(output);


//  using map
const Output = students.map(x => x.name);
console.log(Output);


const bigger = students.filter(x => x.id>25); //filtering values greater than 25
console.log(bigger);

const biggerOne = students.find(x => x>25);  // shows only the first value greater than 25
console.log(biggerOne);