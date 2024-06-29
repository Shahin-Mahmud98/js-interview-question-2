const numbers = [1,2,3,4,5];
const sliceNumbers = numbers.slice(1,3);//start : enclusive and end: exclusive
console.log(sliceNumbers)

// slice clone array 
const cloned = numbers.slice();
console.log(numbers === cloned);

// Array like objects to Array

function toArray(){
    return Array.prototype.slice.call(arguments);
}
const argArray = toArray(1,2,3,4, "test");
console.log(argArray)
console.log(argArray.__proto__.constructor)