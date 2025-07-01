// Here, the reference to a is saved and not the value 7.

function x() {
    var a = 7;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

var z = x();

z();