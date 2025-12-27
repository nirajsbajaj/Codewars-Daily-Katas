/*
Problem:

Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords("Hey fellow warriors") => "Hey wollef sroirraw"
spinWords("This is a test") => "This is a test"
spinWords("This is another test") => "This is rehtona test"
*/
function spinWords(f) {
    let g = f.split(" ");

    let j = [];

    for ( let i = 0; i < g.length; i++ ) {
        
        if (g[i].length >= 5) {
            j[i] = g[i].split("").reverse().join("");
        } else {
            j[i] = g[i];
        }

    }

    j = j.toString().replaceAll(",", " ");
    
    return j;
}


console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("I am the luckiest person on the planet Earth"));