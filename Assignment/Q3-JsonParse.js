/* Q3. JSON.parse()
 You receive this API response as a string:
'{"id":101,"name":"Laptop","price":50000}'
 Convert it into a JavaScript object and access the name.
*/

const response = '{"id":101,"name":"Laptop","price":50000}';

const obj = JSON.parse(response);

console.log(obj.name);

//output : Laptop

//JSON.parse() converts the JSON string into a JavaScript object, 
// allowing us to access properties using dot notation.

