import { breakArray as sliceArray } from './step-1-break-input-array.js';

function compareElements(groupedArray) {

    let verdict = "";

    for ( let k = 0; k < groupedArray.length; k++ ) {

        let isSmallest = true;

        for ( let m = 1; m < groupedArray[k].length; m++ ) {

            if ( groupedArray [k][m] < groupedArray [k][0]) {

                isSmallest = false;
                break;

            }
        }

        if (isSmallest) {
            verdict = `${groupedArray[k][0]} is smallest of all`;
            return verdict;
        }
    };

}

const groupedArray = sliceArray([5, 7, -2, 6, 8]);

console.log(compareElements(groupedArray));