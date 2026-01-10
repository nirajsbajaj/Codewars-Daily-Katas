function compareThis(str, endingWith) {
    a = str;
    b = endingWith;

    //if the 'endingWith' is passed as empty then function returns true
    if ( b.length === 0 ) {
        return true;
    }

    //if the 'endingWith' longer than the 'str' itself it cannot match
    if (b.length > a.length ) {
        return false;
    }

    //variable 'z' stores the length of 'endingWith'
    let z = b.length;
    //variable 'x' stores the last 'z' characters of 'str'
    let x = a.slice(-z);

    //compares each character of 'ending' with the sliced string
    for( let i = 0; i < z; i++ ) {
        
        //if any character does NOT match, the ending is invalid
        if(b[i] !== x[i]) {
            return false;// exit immediately on first mismatch
        }

        //if the loop completes without mismatches, the ending matches
        return true;
    }
}

console.log(compareThis("niraj", "ajdf"));