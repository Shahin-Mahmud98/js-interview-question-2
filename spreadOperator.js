var numbers = [1,2,3,4];

var a = numbers;

// var a = [...numbers]; // eaxt copy of numbers
// var newNumbers = [...numbers,5,6,7]


numbers.push(5);
// console.log(a) // not add push value
// console.log(numbers);

console.log(a); // push value added after given var a = numbers; 


// object spreading

var myObj1 = {
    x:1,
    y:2
}

var myObj2 = {
    a:1,
    b:2
};

console.log({
    ...myObj1,
    ...myObj2
});