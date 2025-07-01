
const first = (cb) => {
    console.log("Hello");
    cb();
}

function second() {
    console.log("Bye");
}

first(second);
