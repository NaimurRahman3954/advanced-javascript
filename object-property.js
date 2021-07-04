 const students = [
   {id: 21, name: "Omar Sunny"},
   {id: 22, name: "Mahiya Mahi"},
   {id: 23, name: "Shuvo"}, 
   {id: 32, name: "Sakib Khan"}
 ]

//  const output = [];

//  for (let i = 0; i < students.length; i++) {
//    const element = students[i].name;
//    output.push(element);
//  }

const output = students.map(x => x.name);

 console.log(output);