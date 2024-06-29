function getCapital(capital) {
    return function (interest) {
        return (capital * interest)/100;
    };
}

const business1 = getCapital(100000)
const profit = business1(25)

console.log(profit)