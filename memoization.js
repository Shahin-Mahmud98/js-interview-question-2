function factorial(n) {
    if (n===1) {
        return 1;
    }else{
        return n * factorial(n-1);
    }
}

// This code can be memoized as follows

function fectorial(n) {
    if (factorialCache[n] !== undefined) {
        return factorialCache[n];
    }else{
        factorialCache[n] = n * factorial(n-1);
        return factorialCache[n];
    }
}