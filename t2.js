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

if (!!foo2) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

if (!!foo) {
    // ...
}
