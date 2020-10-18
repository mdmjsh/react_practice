// numbers, strings and bools are primitive types
// whenever a primitive type is reassigned a value in another variable
// a copy of it is created.
const number =1;
const number2 = number;
// number2 is an actual copy of number


// objects and arrays are reference variables
// if a variable is reassigned to a value in another variable
// this is done by reference to the first variable
// i.e. no copy is created
const person = {name:'Josh'};
const secondPerson = person;
person.name = 'Bob';
console.log(person.name);
// prints Bob as the variable is being accessed by reference
//  i.e the pointer in memory

// A way around this is to use the spread operator to copy the value rather than
// just access by reference

const thirdPerson = {...person};
person.name = 'Jill';
console.log(thirdPerson.name) // prints Bob, as the value has been copied