const numbers = [34, 343, 124, 46, 56754, 67, 1];
const numbers2 = new Array(23, 434, 1, 56);
const fruit = ['apple', 'banana', 'orange', 'pear'];
const mixed = [23, 'salve', true, undefined, null, {a:1, b:2}, new Date()];

let val;

// Get array length;
val = numbers.length;
// check if is array
val = Array.isArray(numbers);
// get single value
val = numbers[3];
val = numbers[0];
// insert into array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(1);

// Mutating arrays
// // add on to end
// numbers.push(250);
// // add on to front
// numbers.unshift(500);
// // take off from end
// numbers.pop();
// // take off form front
// numbers.shift();
// // splice values
// numbers.splice(1,3);
// // reverse.
// numbers.reverse();

// concatenate array
val = numbers.concat(numbers2);

// sorting arrays
// val = fruit.sort();
// console.time();
// val = numbers.sort();
// console.timeEnd();

// // use the "compare function"
// val = numbers.sort(function(x, y){
//     return x - y;
// });

// // reverse sort
// val = numbers.sort(function(x, y){
//     return y - x;
// });

// find
function under50(num){
    return num < 50;
};

val = numbers.find(under50);

console.log(numbers);
console.log(val);