import{ squareDigit } from "./step-3-square-digits.js";

function concatEdOutput(inputNum) {

    let arr = squareDigit(inputNum);

    let finalOutput = arr.join().replaceAll(",","");

    return finalOutput;
}

console.log(concatEdOutput(911));