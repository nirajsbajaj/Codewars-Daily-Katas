function charLengthCheck(x) {

    let a = x;

    let c = a.split(" ");
    
    console.log("a: ", a);
    console.log("c: ", c);

    for ( let i = 0; i < c.length; i++ ) {
        console.log(`Length of c[${i}] element is: `, c[i].length);
    }

}

charLengthCheck("abc defg hijklm nopeq");