function digitize(a) {

    let b = a;

    b = b.toString();

    let c = b.split("").reverse();
    
    let d = c.map( (x) => {
        return Number(x);
    });

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(typeof a);
    console.log(typeof b);
    console.log(typeof c);
    console.log(typeof d);
}

digitize(345678);