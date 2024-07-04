function factorial(n) {
    if (n===1) {
        return 1
    }else{
        return n* factorial(n-1) 
    }
}

// recursion and declaration same as


// f(n-1) + n = f(n)

function sum(n) {
    if (n === 0) {
        return 0;
    }else{
        return sum(n-1) + n;
    }
}

console.log(sum(10))