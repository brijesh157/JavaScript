console.log("A");
setTimeout(() => {
    console.log("B");
}, 1000);

hello().then(() => {
    console.log("C");
});

console.log("E");

async function hello() {
    console.log("D");
    return Promise.resolve();
}