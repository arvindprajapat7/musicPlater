// JavaScript Type Conversions

//console.log("3" + 2); // 32
//console.log(3 + "2"); // 32
//console.log(3 + 3 + "2"); // 62
//console.log("3" + 3 +  2 ); // 332

// console.log( '4' - '2' ); // 2
// console.log( '4' - '6' ); // -2
// console.log('4' * '2' ); // 8
// console.log('4' * 2 ); // 8
// console.log('4' / '2'); //2
// console.log('4' / 2); //2

// non-numeric string used with - , / , * results to NaN

// let val;

// val = 'hello' - 'world';
// console.log(val); // NaN

// val = '4' - 'hello';
// console.log(val); // NaN


// if boolean is used, true is 1, false is 0

// let val;

// val = '4' - true;
// console.log(val); // 3

// val = 4 + true;
// console.log(val); // 5

// val = 4 + false;
// console.log(val); // 4


// Arithmetic operation of undefined with number, boolean or null gives NaN

let result;

result = 4 + undefined;
console.log(result);  // NaN

result = 4 - undefined;
console.log(result);  // NaN

result = true + undefined;
console.log(result);  // NaN

result = null + undefined;
console.log(result);  // NaN