
console.log("main");
console.log("test");
console.log("test");

var add = function (a, b) {
    return a + b;
}
function makeAdder(base) {
    return function (num) {
        return base + num;
    }
}
var add2 = makeAdder(3);
console.dir(add2);