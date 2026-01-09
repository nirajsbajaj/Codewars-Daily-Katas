function descendingOrder(a) {
    /*
    Convert the number into an array of digits characters

    Example: 1234546 -> ["1","2","3","4","5","4","6",]
    */

    let digits = a.toString().split("");

    //This array will store digits in descending order

    let result = [];

    //Continue until all digits have been consumed

    while(digits.length > 0) {

        //Assume the first digit is the largest initially
        let maxIndex = 0;

        //Find the index of the largest digit in the remaining array
        for(let i = 1; i < digits.length; i++ ) {
            if( digits[i] > digits[maxIndex] ) {
                maxIndex = i;
            }
        }
        //Add the largest digit found to the result array
        result.push(digits[maxIndex]);

        //Remove that digit so it is not reused
        digits.splice(maxIndex, 1);
    }

    //Join the digits back into a string and convert to a number
    return Number(result.join(''));
}

console.log(descendingOrder(1234546));