import { numToString as stringEd } from './step-1-num-to-string.js';
import { strToArr as arrayEd } from './step-2-string-to-array.js';
import { arrayRotation as arrayRotEd} from './step-3-rotated-array.js';

function elementFreq(inputArr) {
    let a = inputArr;

    let eleOccurr = {};
    
    for( let i = 0; i < a.length; i ++ ) {
        let candidate = a[i][0];
        
            if( eleOccurr[candidate] === undefined) {
                eleOccurr[candidate] = 1;
            } else {
                eleOccurr[candidate]++;
            }
        }

    return eleOccurr;
}


/*console.log(elementFreq(arrayRotEd(arrayEd(stringEd(1234564)))));*/

export { elementFreq };