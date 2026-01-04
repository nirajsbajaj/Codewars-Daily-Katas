function breakArray(inputArray) {

    let groupedArray = [];

    for ( let i=0; i < inputArray.length; i++ ) {
        let copyArray = [];

        for ( let j=0; j < inputArray.length; j++ ) {
            copyArray.push(inputArray[j]);
        }

        groupedArray.push(copyArray);

        let removedElement = inputArray.shift();
        inputArray.push(removedElement);
    } 

    return groupedArray;
}

/*
console.log(breakArray([5, 7, 2, 6, 8]));
*/

export { breakArray };