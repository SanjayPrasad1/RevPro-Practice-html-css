/*
9. Function Declaration vs Arrow Function

Create a function to calculate GST using:

Function Declaration

Arrow Function
 Mention one key difference.

*/

//Function declaration

function calculateGst(price){
    return price*0.18;
}

//Arrow function

const calculateGst = price => price * 0.18;

/*

Difference 

Function declarations have their own this and are hoisted.

Arrow functions do not have their own this and are not hoisted.
*/