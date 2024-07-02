// async function fetchData(){
//     try {
//         const response = await 
//         fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error Occurred :" + error)
//     }
// }

// fetchData();


// Interview Tricky Question : Understanding Closure, Async-Await, and Scope
function delay(i) {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(i)
        }, i*1000)
        
    })
}



async function timer(n) {
    console.log("Start Timer")
    for (let i = 0; i <= n; i++) {
        const result = await delay(i);
        console.log(result);
    }
    console.log("End Timer")
}
timer(3);