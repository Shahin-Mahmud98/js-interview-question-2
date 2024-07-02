// closure HM Nayem
// function getCapital(capital) {
//     return function (interest) {
//         return (capital * interest)/100;
//     };
// }

// const business1 = getCapital(100000)
// const profit = business1(25)

// console.log(profit)


// closure sumit saha
function temporary() {
    let counter = 0;

    return function () {
        counter = counter + 1;

    }
}

const add = temporary();
console.log(add)
add();