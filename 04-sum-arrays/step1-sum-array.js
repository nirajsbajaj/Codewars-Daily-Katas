function sumArray(inArray) {
    let sum = 0;

    if ( inArray.length === 0) {
        sum = 0;
    } else {
        for ( let i = 0; i < inArray.length; i++ ){
            sum = sum + inArray[i];
        }
    }

    return sum;
}

console.log(sumArray([1, 5.2, 4, 0, -1]));