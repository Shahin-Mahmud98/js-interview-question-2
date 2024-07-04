// <-- Event Bubling access child class to parent class -->

// const parent = document.getElementById('parent');
// const form = document.getElementById('form');
// const button = document.getElementById('button');


// parent.addEventListener('click',listener);
// form.addEventListener('click',listener);
// button.addEventListener('click',listener);

// function listener(event) {
//     console.log(this.tagName);
// }


// <-- Event capture access parent class to child class -->
// const parent = document.getElementById('parent');
// const form = document.getElementById('form');
// const button = document.getElementById('button');


// parent.addEventListener('click',listener,{
//     capture:true,
// });
// form.addEventListener('click',listener,{
//     capture:true,
// });
// button.addEventListener('click',listener,{
//     capture:true,
// });

// function listener(event) {
//     console.log(this.tagName);
// }



// Question: Suppose you click button first after you click button you showing form in first then other two 

// Answer:

const parent = document.getElementById('parent');
const form = document.getElementById('form');
const button = document.getElementById('button');


parent.addEventListener('click',listener);
form.addEventListener('click',listener,{
    capture:true,
});
button.addEventListener('click',listener);

function listener(event) {
    console.log(this.tagName);
}