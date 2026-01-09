import { numToString as stringEd } from './step-1-num-to-string.js';

function strToArr(str) {
    let toArr = str.split("");
    return toArr;
}

/*console.log(strToArr(stringEd(12345)));*/

export { strToArr };