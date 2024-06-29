const obj1 = {
    name: "MD Shahin Mahmud",
    age:27
}
const obj2 = Object.assign({},obj1); //Object.assign() method  

const obj3 = {...obj1}; //the spread operator (...)


//Result are same
console.log(obj2)
console.log(obj3)