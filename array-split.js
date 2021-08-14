const nums = [1,2,3,4,5,6,7,8];

// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const part = nums.slice(2,3); // shows from 2nd index to before 5th index. (starts from 0)

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const removed = nums.splice(2,6);   // shows 6 items from 2nd index onwards

// The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
const together = nums.join("_");

console.log(part);
console.log(removed);
console.log(nums);   
console.log(together);