//array.prototype.find
// var numbers = [1,2,3,4,5,,6,7,11];

// var result = numbers.find(function (currentValue,currentIndex,arr) {
//     return currentValue > 4;
// });

// console.log(result);


// by giving class constructor

class Student {
    constructor(name,age){
        this.name = name;
        this.age = age;

    }
    test(){
        console.log('hello')
    }
    exampleFunction(){
        let array = [1,2,3];
        array.find(function () {
            this.test();
        },this);
    }
}

let student = new Student('Shahin',27)
console.log(student)

student.exampleFunction();