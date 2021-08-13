function stopwatch() {

  let count =0;

  return function name() {
    count++;
    return count;
  }
}

const clock1 = stopwatch();
console.log(clock1);