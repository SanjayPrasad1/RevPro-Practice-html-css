/*
10. Closures – Secure Counter

Create a counter function that cannot be directly modified from outside.
*/

function createCounter() {
  let count = 0; // private variable

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2


/*
count is private and cannot be accessed or modified directly.

The inner function remembers count using a closure, keeping it secure from outside access
*/