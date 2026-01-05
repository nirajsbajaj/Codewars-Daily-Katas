function sumArray(inArray) {
    let total = 0;

    /*
    CASE 1:
    'Array.isArray(inArray)' returns 'True' if inArray is actual array then the '!' operator negates it and returns 'False'.

    'inArray.length === 0' also returns 'False'

    The condition becomes (False || False)

    Then JavaScript resolves Expressions from left to right and seeing 'False' the IF block is skipped and the FOR loop runs and returns total.

    CASE 2:
    'Array.isArray(inArray)' returns 'False' if inArray is not an actual array then the '!' operator negates it and returns 'True'.

    'inArray.length === 0' is not evaluated due to OR short-circuiting.


    Then JavaScript resolves Expressions from left to right and seeing 'True' the IF block runs and returns 0.
    */

    if ( !Array.isArray(inArray) || inArray.length === 0 ) {
        return 0;
    }

    for( let i = 0; i < inArray.length; i++ ) {
        total = total + inArray[i];
    }
    
    return total;
}

console.log(sumArray([1, -9.2, 5, 6]));