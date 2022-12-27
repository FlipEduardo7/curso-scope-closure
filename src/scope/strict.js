'use strict';
pi = 3.1416;//el modo estricto no nos permite asignar valores a una variable sin declararla antes
console.log(pi);

function myFunction() {
    return pi = 3.1416;//de igual manera no podemos retirnar una variable en una funcion sin declararla antes
}

console.log(myFunction());