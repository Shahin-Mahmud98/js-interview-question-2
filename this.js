// var printPlayerNameFunction = function (obj) {
//     obj.printPlayerName = function () {
//         console.log(this.name);
//     };
// };

// var sakib = {
//     name:"sakib",
//     age:33
// }
// var tamim = {
//     name:"Tamim",
//     age:34
// }

// printPlayerNameFunction(sakib);
// printPlayerNameFunction(tamim);

// sakib.printPlayerName();
// tamim.printPlayerName();


//<-- 2nd way -->

// var Person = function (name,age) {
//     return {
//         name: name,
//         age:34,
//         printName: function (){
//             console.log(this.name);
//         },
//     };
// };

// var sakib = Person("Sakib",45);
// sakib.printName();


// explicitly way

// var printName = function (v1,v2,v3){
//     console.log(`${this.name} is ${v1},${v2}& ${v3}`);

// }
//  var sakib = {
//     name : "sakib",
//     age:23
//  }

//  var v1 = 'Handsome';
//  var v2 = 'All Rounder';
//  var v3 = 'Best Player';


//  var v = [v1,v2,v3]; //for .apply 

 


// //  printName.call(sakib, v1,v2,v3);
//  printName.apply(sakib, v);


// //<-- for bind use -->
//  var newFunc = printName.bind(sakib,v1,v2,v3);
//  newFunc();



// <-- New Binding -->

// function Person(name,age) {
//     //let this = Object.create();
//     this.name = name,
//     this.age = age
//     console.log(`${this.name} is ${age} years old`)
//     //return this
// }

// let sakib = new Person("Sakib",34);


// <-- Window Binding -->

var PrintName = function () {
    // console.log(this) // Jokhoni eta call kori tohkon window k point kore

    console.log(window === this); // eta call korle era check kore window and this soman ty bujha gelo window this soman
    console.log(this.name);
}

var sakib = {
    name:"SAKIB",

}

PrintName();


