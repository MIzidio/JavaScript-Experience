const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 25,
    email: 'steve@gmail.com',
    hobbies: ['music', 'sports'],
    address: {
        city: 'Miami',
        state: 'FL'
    },
    getBirthYear: function(){
        return 1994;
    }
};

let val;

val = person;

//get specific value
val = person.firstName;
val = person['lastName'];
val = person.age;
val = person.hobbies[1];

console.log(val);