/*
7. Array filter – Search Feature

You want to show only available products from a product list.
Use filter() to return items with inStock === true.

*/

const products = [
  { name: "Laptop", inStock: true },
  { name: "Mobile", inStock: false },
  { name: "Tablet", inStock: true }
];

const availableProducts = products.filter(product => product.inStock === true);

console.log(availableProducts);


/*
output:

[
  { name: "Laptop", inStock: true },
  { name: "Tablet", inStock: true }
]

*/

// filter() returns a 
// new array containing only elements that meet the condition (inStock === true).