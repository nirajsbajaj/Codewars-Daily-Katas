function spinWords(x) {
    let a = x.split(" ");
    /*
    x.split(" ") splits the input string by spaces delimiter and returns an array of each word as string separated by comma.
    We declare variable a and assign that returned array to it.
    */

    let c = new Array();

    for ( let i = 0; i < a.length; i++ ) {
        c[i] = a[i].split("").reverse().join("");
    };

    /*
    Now we declare another array c.

    We perform a for loop with 'counter i' to iterate through each element of 'array a' with the help of 'a[i]' performing the following operations:

    1. a[i].split("") splits each element into an array of its characters.
    2. .reverse() reverses the order of characters in that array
    3. .join("") joins the reversed characters back into a string.

    Finally, we assign the reversed string to the corresponding index in array c with the help of c[i].

    This finally results in array c containing all words from 'array a' but with each word reversed.
    */
    
    let e = c.toString().replaceAll(",", " ");

    /*
    Now we declare variable e.

    We perform the following operations on 'array c':

    1. .toString() converts the entire 'array c' into a single string, with each element separated by commas.
    2. .replaceAll(",", " ") replaces all commas in that string with spaces.

    Finally, we assign the resulting string to variable e.
    */

    console.log("array a: ", a);
    console.log("array c: ", c);
    console.log("e: ", e);
}

console.log(spinWords("abc defg hijklm nopeq"));