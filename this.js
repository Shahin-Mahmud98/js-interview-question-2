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

var Person = function (name,age) {
    return {
        name: name,
        age:34,
        printName: function (){
            console.log(this.name);
        },
    };
};

var sakib = Person("Sakib",45);
sakib.printName();