/*
8. Array reduce – Cart Total
Calculate the total price of items in a shopping cart using reduce().
*/

const cart = [
  { item: "Book", price: 500 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 1000 }
];

const total = cart.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(total);


//output: 1550

/*
reduce() combines all array values into a single result (total price) by accumulating each item’s price.
*/