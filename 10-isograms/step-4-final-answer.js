function isogram(inputString) {
    let arr = inputString.toLowerCase().split("");

    let temp = [];

    for ( let i = 0; i < arr.length; i++ ) {
        temp.push(arr[i]);
    }

    let isIt = true;

    while( temp.length > 0 ) {

        for ( let i = 1; i < temp.length; i++ ) {
            
            if( temp[i] == temp[0] ) {
                isIt = false;
                break;
            }

        }

        if(!isIt) {
            break;
        }
        
        temp.shift();
    }
    return isIt;
}

console.log(isogram("abc"));