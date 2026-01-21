function summation(num) {
    let sum = 0;

    let i = 1;

    while (i <= num) {
        sum += i;
        i++
    }
    
    return sum;
}

console.log(summation(2));

console.log(summation(8));