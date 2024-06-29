const person = {
    name : "MD Shahin Mahmud",
    age:27,
    greet: function(){
        console.log("hello ,"+ this.name )
    }
};

person.greet();
// const person = {
//     name : "MD Shahin Mahmud",
//     age:27,
//     greet: function(){
//         console.log("hello ,"+ this.name )
//     }
// };

// person.greet();