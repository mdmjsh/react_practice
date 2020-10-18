
// standard vanilla js function
function printMyName(name){
    console.log(name);
  }

  printMyName('Josh');


// arrow function
// declare as a variable (const)
// name
// = (params)
// function body
  const printMyNameArrow = (name) => {
    console.log(name);
  }

  printMyNameArrow("josh");


const double = (number) => {return number * 2;}
console.log(double(2));

// shortend version of above. If all function does is return
// (no other code in body, {} and return keyword can be ommited)
const double_ = (number) => number * 2;
console.log(double_(2));