const person = 
{
    name: "Md Shahin Mahmud",
    greet: function () {
        console.log("Hello," + this.name)
    }
}

const greetFn = person.greet;
const boundFn = greetFn.bind(person);
boundFn();