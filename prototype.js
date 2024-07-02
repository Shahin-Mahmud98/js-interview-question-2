// function Person(name,age){
//     this.name = name;
//     this.age = age;

// }
// Person.prototype.greet = function () {
//     console.log("Hello,"+ this.name);
// };
// Person.prototype.greet = function () {
//     console.log("Age :"+ this.age);
// };

// const person = new Person("Md Shahin Mahmud",27);
// person.greet();


// prototype by sumit saha

// function Person(name,age) {
//     let person = Object.create(Person.prototype);
//     person.name = name;
//     person.age = age;

//     return person;
// }

// Person.prototype = 
// {
//     eat(){
//         console.log(`The man is Eatiing`)
//     },
//     sleep(){
//         console.log(`The man is Sleeping`)
//     },
//     play(){
//         console.log(`The man is Playing`)
//     }
// }

// const sakib = Person("Sakib",37);
// sakib.play();
// const tamim = Person("Tamim",35)


// <--Prototype use this -->

// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype = 
// {
//     eat(){
//         console.log(`The man is Eatiing`)
//     },
//     sleep(){
//         console.log(`The man is Sleeping`)
//     },
//     play(){
//         console.log(`The man is Playing`)
//     }
// }

// const sakib = new Person("Sakib",37);
// sakib.play();
// const tamim = new Person("Tamim",35)



// <-- Class Constructor -->

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
        
//     }
//     eat(){
//         console.log(`The man is Eatiing`);
//     }
//     sleep(){
//         console.log(`The man is Sleeping`);
//     }
//     play(){
//         console.log(`The man is Playing`);
//     }
// };

        
//     const sakib = new Person("Sakib",37);
//     sakib.play();
//     const tamim = new Person("Tamim",35)


//<-- Dynamically Object create -->

function Person(name,age){
    this.name = name;
    this.age = age;

}
Person.prototype={
    eat: function(){
        console.log(`${this.name} is eating` );
    },
    
}  
    const sakib = new Person("Sakib",37);
    sakib.eat();
    const tamim = new Person("Tamim",35)
    tamim.eat();