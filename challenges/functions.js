// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
    const consume = (x, y, callback) => callback(x, y);
      
  
    


//  Step 2: Create several functions to callback with consume();
//   * Create a function named add that returns the sum of two numbers

       function add(x, y) {
          return x + y
          }

         console.log(consume(6,4, add));
//   * Create a function named multiply that returns the product of two numbers 

function multiply(x, y) {
  return x * y
  
  };

console.log(consume(4, 7, multiply));
 
//   * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
// */
function greeting (firstName, lastName) {
  return  'Hello ' + firstName + lastName + 'nice to meet you'
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 console.log(consume(2, 2, add)); // 4
//  consume(10,16,multiply); // 160
 console.log(consume("Mary ","Poppins ", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: JavaScript functions can be nested within other functions. A nested (internal) function can access the arguments and variables of the (external) function it is nested within.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();