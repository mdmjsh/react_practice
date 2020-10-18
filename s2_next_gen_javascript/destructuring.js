// Extract array/object elements and store them in variables
// similar to spread operator, this is used for pulling out single elements
// similar to pattern matching

[a, b] = ['Hello', 'Bob']
console.log(a)
console.log(b)

const numbers = [1,2,3]
[num1, num2] = numbers;
console.log(num1, num2)
// 1, 2

// to get 1st & 3rd elements, leave a space in the middle!
const numbers = [1,2,3]
[num1, ,num3] = numbers;
console.log(num1, num2)
// 1,3


{name} = {name: 'Bob', age: 55}
console.log(name) // Bob
console.log(age) // undefined