import { normalize } from "./step-1-normalize-input.js"

function splitString(inputString) {
    let arr = normalize(inputString).split("");

    return arr;
}
// console.log(splitString("walterWhite"));

export { splitString }