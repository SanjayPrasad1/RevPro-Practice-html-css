// 2. Callback Queue

// You are loading ads after page load using setTimeout.
// Why does the ad load after the main content even if the timeout is 0ms?


/*
Ans - 
JavaScript is single-threaded
The browser finishes all synchronous code first
Only then does the event loop move callbacks from the queue to the call stack

*/

console.log("Main content loaded");

setTimeout(() => {
  console.log("Ad loaded");
}, 0);

console.log("More main content");

/*
Main content loaded
More main content
Ad loaded

*/
