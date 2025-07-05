// Let is block-scoped.


function letExample() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}

letExample();