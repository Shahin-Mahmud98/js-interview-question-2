function closureDemo() {
    var a = 20;
    function anotherFunc() {
        var b = 30;
        console.log(`sum:`+ (a+b));
    }
    anotherFunc(a);
    return anotherFunc;
}

var returndFunc = closureDemo();
returndFunc();
// console.log(returnFunc);