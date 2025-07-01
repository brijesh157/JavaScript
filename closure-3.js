// Here function y forms closures with its parent function and its parent-parent function.

function z() {
    var b = 100;
    function x() {
        var a = 7;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();