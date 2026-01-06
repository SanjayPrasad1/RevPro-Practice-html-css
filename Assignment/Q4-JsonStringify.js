/*
4. JSON.stringify()

You want to store user details in localStorage.
 Convert the following object into JSON string:

{ username: "admin", role: "manager" }

*/

const user = { username: "admin", role: "manager" };

const jsonString = JSON.stringify(user);

localStorage.setItem("userDetails", jsonString);


/*
JSON.stringify() converts a JavaScript object into a JSON string, 
which is required for storing data in localStorage.
*/