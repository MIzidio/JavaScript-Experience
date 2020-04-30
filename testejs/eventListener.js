// document.querySelector('.clear-tasks').addEventListener('click',
//     function(e) {
//         console.log('Hello World');
//         // e.preventDefault();
//     }
// );

document.querySelector('.clear-tasks').addEventListener('click',
    onClick
);

function onClick(e) {
    console.log('clicked');
    let val;
    val = e;

    //event target element
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    e.target.innerText = 'Hello';

    //event type
    val = e.type;

    //event timestamp
    val = e.timeStamp;

    //coord event relative to the window
    val = e.clientY;
    val = e.clientX;

    //coord event relative to the element
    val = e.offsetY;
    val = e.offsetX;
    
    console.log(val);
}