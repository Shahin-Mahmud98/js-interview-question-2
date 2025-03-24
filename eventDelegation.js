// document.getElementById('myList').addEventListener('click',
//     function (e){
//         if (e.target.nodeName === "LI") {
//             console.log(e.target.textContent)
//         }
//     }
// );


// Another Process

// const div = document.getElementsByTagName("div")[0]

// div.addEventListener("click",(e)=>{
//     if (e.target.tagName === "BUTTON") {
//         console.log("Button was clicked")
//     }
// })

// const div = document.querySelector('div')
// div.addEventListener('click',(e)=>{
//     if (e.target.tagName === 'BUTTON') {
//         console.log(e.target.innerText)
//     }
// })

// id dhore
// const div = document.querySelector('div')
document.getElementById('myList').addEventListener('click',(e)=>{
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.innerText)
    }
})

// for each method

// const buttons = document.querySelectorAll('button')
// buttons.forEach(button =>{
//     button.addEventListener('click',(e)=>{
       
//             console.log(e.target.innerText)
        
//     })
// })


// Event Delegation Important think

const list = document.getElementById('list');

list.addEventListener('click', (e)=>{
    // console.dir(e) for all dir bujhar jonno
    if (e.target.matches("li")) {
        if (e.target.innerText === "Javascript") {
            e.target.style.backgroundColor ="yellow"
        }else{
            e.target.style.backgroundColor ="blue"
        }
    }
})

// for element adding

function addElement() {
    const newElement = document.createElement("li");
    newElement.textContent = "dot net";
    list.appendChild(newElement);
}