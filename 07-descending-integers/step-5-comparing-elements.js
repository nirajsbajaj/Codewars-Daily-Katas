import { numToString as stringEd } from './step-1-num-to-string.js';
import { strToArr as arrayEd } from './step-2-string-to-array.js';
import { arrayRotation as arrayRotEd} from './step-3-rotated-array.js';
import { elementFreq as eleFreq } from './step-4-element-frequency.js';


function elementsCompare(inputArr){

    let a = inputArr;
    let freq = eleFreq(a);

    let desOrder = [];

    let totalDigits = a[0].length;

    while (desOrder.length < totalDigits ) {

        let biggestCandidate = null;

        for ( let i = 0; i < a.length; i++ ) {

            let candidate = a[i][0];

            let usedCandidate = 0;
            for ( let k = 0; k < desOrder.length; k++ ) {
                if ( desOrder[k] === candidate ) {
                    usedCandidate++;
                }
            }
            
            if ( usedCandidate >= freq[candidate] ) {
                continue;
            }

            let isBiggest = true;

            for ( let j = 1; j < a[i].length; j++ ) {
                let current = a[i][j];

                let usedCurrent = 0;
                for ( let k = 0; k < desOrder.length; k++ ) {
                    if( desOrder[k] === current ){
                        usedCurrent++;
                    }
                }

                if ( usedCurrent >= freq[current] ) {
                    continue;
                }

                if(current > candidate) {
                    isBiggest = false;
                    break;
                }
            }
            
            if(isBiggest) { 
                if (
                    biggestCandidate === null || candidate > biggestCandidate) {
                        biggestCandidate = candidate;
                    }
            }

        }
        desOrder.push(biggestCandidate);
    }

    return desOrder.join("");
}

console.log(elementsCompare(arrayRotEd(arrayEd(stringEd(1234546)))));