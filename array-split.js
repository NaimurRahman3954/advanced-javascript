const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);
const removed = nums.splice(2,3);

const together = nums.join(", ")

console.log(part);
console.log(removed);
console.log(nums);   