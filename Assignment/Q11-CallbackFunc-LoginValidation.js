/*
11. Callback Function – Login Validation

You validate a user and then redirect them.
 Implement validation using callback functions.

*/

function validateUser(username, password, callback) {
  // Simulate user validation
  if (username === "admin" && password === "1234") {
    callback(null, "Login successful! Redirecting...");
  } else {
    callback("Invalid credentials", null);
  }
}

// Using the callback
validateUser("admin", "1234", (error, message) => {
  if (error) {
    console.log(error);
  } else {
    console.log(message);
    // Redirect logic can go here
  }
});

/*
output:
Login successful! Redirecting...

Reason:
validateUser performs validation and then calls the callback with either an error or a success message.

Callbacks allow you to handle asynchronous tasks like login or redirection after validation.
*/