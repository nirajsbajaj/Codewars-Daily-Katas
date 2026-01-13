import { splitString } from "./step-2-string-split.js"

function squareDigit(inputNum) {
    let arr = splitString(inputNum);

    let temp = [];

    for ( let i = 0; i < arr.length; i++ ) {
        temp.push(arr[i]*arr[i]);
    }

    return temp;
}

// console.log(squareDigit(9119));
export { squareDigit }