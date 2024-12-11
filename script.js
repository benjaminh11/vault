// psuedocode //
// create string message for the user. for this i will be using const as i dont want anything to change
//next i must create 3 seperate variables for each number of the combination using different arithmatic operators//
// next step create a varible that combines our message string and our combo variables this step may be unnecessary as we could just create an alert using the 4 variables we created//
//last step create the alert using our newly created variable. I chose this method because I like the cleaner look of the alert function//

const msg = // first step, create a string with our message//
  " You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
const num1 = 5 + 5; //next step, creat variables that represent the numbers for our combination //
const num2 = 20 * 2;
const num3 = 50 - 11;
const strComplete = `${msg} ${num1} - ${num2} - ${num3}`; //create a variable combining our message and combo//
alert(strComplete); //create alert box that contains our combined variable//
