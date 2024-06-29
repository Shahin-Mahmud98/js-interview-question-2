function Person(name){
    this.name = name;

}
Person.prototype.greet = function () {
    console.log("Hello,"+ this.name);
};

var person = new Person("Md Shahin Mahmud");
person.greet();
