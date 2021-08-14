function stopwatch() {
  let count = 0;
  //  returning a function from another function
  return function() {
    count++;
    return count;
  }
}

const clock1 = stopwatch();
console.log(clock1());  // why do we need to put () here? Bcz, clock1 is actually a function and we are calling it.
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

// this is a separate closed scope. That's why these things are called closure
const clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());