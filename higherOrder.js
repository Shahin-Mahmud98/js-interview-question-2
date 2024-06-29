function multiplyByTwo(num) {
    return num * 2;
}
function applyOperation(num,operation) {
    return operation(num)
}

const result = applyOperation(9,multiplyByTwo)
console.log(result);