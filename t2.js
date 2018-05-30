/*eslint no-debugger: "error"*/

function isTruthy1(x) {
    debugger;
    return Boolean(x);
}

function isTruthy2(x) {
    debugger;
    return Boolean(x);
}

if (!!foo) {
    // ...
}

if (Boolean(foo)) {
    // ...
}

if (foo) {
    // ...
}
