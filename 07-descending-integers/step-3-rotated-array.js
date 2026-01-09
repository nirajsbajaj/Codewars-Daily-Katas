import { numToString as stringEd } from './step-1-num-to-string.js';
import { strToArr as arrayEd } from './step-2-string-to-array.js';


function arrayRotation(inputArr) {
    let a = inputArr;

    let rotArr = [];

    for ( let i = 0; i < a.length ; i++ ) {

        let tempArr = [];

        for ( let j = 0; j < a.length ; j++ ) {
            tempArr.push(a[j]);
        }

        rotArr.push(tempArr);
        
        let first = a.shift();
        a.push(first);
    }

    return rotArr;
}

/*console.log(arrayRotation(arrayEd(stringEd(1234564))));*/

export { arrayRotation };
