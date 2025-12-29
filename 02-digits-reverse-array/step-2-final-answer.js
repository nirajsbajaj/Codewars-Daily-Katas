function digitize(a) {
    return a.toString().split("").reverse().map( (x) => { return Number(x);});
}

console.log(digitize(345678));