import { numToString as strEd } from "./step-1-num-to-string.js";

function splitString(inputNum) {
    let str = strEd(inputNum);
    let arr = str.split("");

    return arr;
}

// console.log(splitString(9119));
export { splitString };