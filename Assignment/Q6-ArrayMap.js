/*

6. Array map – Price Calculation
An e-commerce site gives 10% discount on all prices.
Use map() to create a new discounted price list.

*/

const prices = [1000, 2000, 3000];

const discountedPrices = prices.map(price => {
  return price * 0.9; // 10% discount
});

console.log(discountedPrices);


/*
output: [900, 1800, 2700]
*/

// map() creates a new array by applying a function to each element, 
// without changing the original prices array.
