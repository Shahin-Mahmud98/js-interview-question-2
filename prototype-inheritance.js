// FUnction Based Prototype-inheritance

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// function Cricketer(name,age,type,country) {
//     Person.call(this)
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
// }

// Person.prototype = {
//     eat : function(){
//         console.log(`${this.name} is eating`);
//     }
// }

// Cricketer.prototype = Object.create(Person.prototype);

// Cricketer.prototype.constructor = Cricketer;

// Cricketer.prototype.play = function () {
//     console.log(`${this.name} is Playing`);
// };

// let sakib = new Cricketer ("Sakib",47, "Showroom Al Hasan","Bd");

// console.log(sakib.play());


// <-- Class Based Prototype-inheritance -->

// class Person {   
//     //Parent class 
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }
    

// }

// class Cricketer extends Person { 
//     //Sub class
    
//     constructor(name,age,type,country){
//         super(name,age,type,country);
//         this.name = name;
//         this.age = age;
//         this.type = type;
//         this.country = country;
//     }
//     play(){
//         console.log(`${this.name} is playing`)
//     }
//     all(){
//         console.log(`${this.type} is playing`)
//     }
// }

// let sakib = new Cricketer ("Sakib",57,"Showroom Al Hasan","BD");

// sakib.eat();



// <-- Js Polymorphism -->

class Person {   
    //Parent class 
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
    play(){
        console.log(`${this.name} is playing`)
    }
    

}

class Cricketer extends Person { 
    //Sub class
    
    constructor(name,age,type,country){
        super(name,age,type,country);
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    play(){
        super.play();
        console.log(`${this.name} is playing cricket`)
    }
    all(){
        console.log(`${this.type} is playing `)
    }
}

let sakib = new Cricketer ("Sakib",57,"Showroom Al Hasan","BD");

sakib.play();



