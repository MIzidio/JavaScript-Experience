// create element
const li = document.createElement('li');

// add a class
li.className = 'collection-item';

// add id
li.id = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

//create text node and append
li.appendChild(document.createTextNode('Hello World'));

//create link element
const link = document.createElement('a');
//add classes
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

//appende link into li
li.appendChild(link);

// append li as child ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);