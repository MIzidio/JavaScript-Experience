const name = "Matheus";
const lastName = "Izidio";

const str = 'Salve salve quebrada, aprendendo uns bagulho aki';

let val;

// Concatenation
val = name + " " + lastName;

// Append
val = "Matheus ";
val += "Izidio";

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = name.length;

// concat()
val = name.concat(' ', lastName);

// Change case
val = name.toUpperCase();
val = name.toLowerCase();

val = name[3];

// indexOf()
val = name.indexOf('u');
val = name.lastIndexOf('h');

// charAt()
val = name.charAt('2');
// get last char
val = name.charAt(name.length - 1);

// substring()
val = name.substring(0, 4);

// slice()
val = name.slice(0,4);
val = name.slice(-3);

// split()
val = str.split(' ');

// replace()
val = str.replace('quebrada', 'galerinha');

// inlcudes()
val = str.includes('opa');

console.log(val);