import { splitString } from "./step-2-split-string.js";

function compareElements(inputString) { 
    let arr = splitString(inputString);

    let temp = [];

    for( let i = 0; i < arr.length; i++ ) {
        temp.push(arr[i]);
    }

    let isIt = false;

    while( temp.length > 0) {
        
        let sameIndex = 0;

        for(let i = 1; i < temp.length; i++ ) {
            

            if( temp[i] == temp[0] ) {
                isIt = true;
            }

        }

        temp.splice(temp[sameIndex], 1);
        console.log(temp);
    }

    return isIt;
}

console.log(compareElements("abc"));