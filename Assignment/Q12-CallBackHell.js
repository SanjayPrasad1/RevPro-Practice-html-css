/*
12. Callback Hell – Payment Processing

A payment flow involves:

Validate user

Process payment

Generate invoice
Explain why nested callbacks become difficult to manage.

*/

/*
Scenario: A payment flow with 3 steps:

Validate user

Process payment

Generate invoice
*/

validateUser(user, function(err, userData) {
  if (err) {
    console.log("User validation failed");
  } else {
    processPayment(userData, function(err, paymentData) {
      if (err) {
        console.log("Payment failed");
      } else {
        generateInvoice(paymentData, function(err, invoice) {
          if (err) {
            console.log("Invoice generation failed");
          } else {
            console.log("Payment completed and invoice generated");
          }
        });
      }
    });
  }
});


/*
Deep nesting: The more steps, the deeper the code goes → “pyramid of doom.”

Difficult to read: Indentation grows and logic is hard to follow.

Error handling is tricky: Each callback may need separate error checks.

Hard to maintain: Adding or changing steps requires careful edits at multiple nested levels.

better approach - promise, async/await --> makes code readable
*/