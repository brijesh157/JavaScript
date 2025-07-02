
// In JavaScript, if a function with a block body does not have a return statement, it implicitly returns undefined
let x = [1, 2, 3].map(x => { });
console.log(x);


// An async function always returns a Promise — even if you don’t explicitly return anything.
// In this case, since the async function has no return, it implicitly returns undefined, wrapped in a Promise
let x1 = [1, 2, 3].map(async x => { });
console.log(x1);

let x3 = [1, 2, 3].filter(async x => x % 2 === 0);
console.log(x3);

let x4 = [1, 2, 3].filter(x => x % 2 === 0);
console.log(x4);