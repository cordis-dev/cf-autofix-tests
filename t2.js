/*eslint no-debugger: "error"*/

function isTruthy1(x) {
    debugger;
    return Boolean(x);
}

function isTruthy2(x) {
    debugger;
    return Boolean(x);
}

var x = 5;;
var y = 2;;

if (!!foo) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

if (foo) {
    // ...
}
