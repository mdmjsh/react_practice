// ... operator


// Spread - used to split up arrays OR object properties into new vars
let oldArray = [1,2,3]
const newArray = [...oldArray, 4,5 ]
console.log(newArray);
// [1,2,3,4,5]

let oldObject = {blah: 1}
const newObject = {...oldObject, newProp:5 }
console.log(newObject);
// {blah:1, newProp:5 }
// n.b. if oldObject also had a newProp key it would be overwritten

// Rest - used to merge a list of function args into an array
// analogous to *args in python
function func(...args){
    return args.sort()
}

// example
// arrow syntax, inline return value...
// args.filter - with an anonymous function
const filter = (...args) => args.filter(el => el === 1);
console.log(filter(1,2,3));
// [1]