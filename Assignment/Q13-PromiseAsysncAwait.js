/*
13. Promises & async/await

Convert this promise-based API call into async/await:

fetch(url).then(res => res.json()).then(data => console.log(data));

*/
async function getData() {
  try {
    const res = await fetch(url);      // wait for fetch
    const data = await res.json();     // wait for JSON conversion
    console.log(data);                 // use the data
  } catch (error) {
    console.log("Error:", error);      // handle errors
  }
}

getData(); // call the async function

/*
await pauses the execution until the promise resolves, making the code look synchronous.

try...catch is used to handle errors, replacing .catch() in promise chains.

This makes code cleaner and easier to read compared to nested .then() calls.
*/