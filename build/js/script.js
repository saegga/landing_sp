function libFun(n,o){return n*o}libFun(1,2),console.log("lib"),console.log("main"),console.log("test"),console.log("test");var add=function(n,o){return n+o};function makeAdder(o){return function(n){return o+n}}var add2=makeAdder(3);console.dir(add2);