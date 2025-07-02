
// When a function is retured, it remembers its lexical scope as well.


function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();

// Here x will get vanished after execution of 12th line. But, function y will remember its lexical scope even after that
//  (variables present in x).

//....
z();

// Same thing as above
// function x() {
//     var a = 7;
//     return function y() {
//         console.log(a);
//     }
// }


