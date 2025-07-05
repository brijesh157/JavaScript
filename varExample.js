
// Var is function-scoped not block-scoped.
// This means that when you declare var x = 20; inside the if block, it does not create a new variable scoped to the block,
//  but rather reassigns the same x declared at the function level.

function varExample() {
    var x = 10;
    if (true) {
        var x = 20;
        console.log(x);
    }
    console.log(x);
}
varExample();