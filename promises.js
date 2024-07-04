// function fetchData() {
//     return new Promise (function (resolve,reject) {
//         //Simulating an asynchronous Operation
//         setTimeout(function () {
//             const data = "Some data";
//             resolve(data);
//         },2000)
//     })
// }

// fetchData()
// .then(function (data) {
//     console.log("Data Received : " + data)
// })
// .catch(function (error) {
//     console.log("Error Occured :"+error)
// });


// <-- Promise -->
// const status = true;
// console.log('Task 1');

// // <-- Promise Defination -->
// const promise = new Promise (function (resolve,reject) {
//     setTimeout(function () {
//         if (status) {
//             resolve('Task 2');
//         }else{
//             reject('failed');
//         }
       
//     },2000)
// });


// // <-- Promise call -->

// promise 
// .then(function (value) {
//     console.log(value)
// })
// .catch(function (err) {
//     console.log(err)
// })

// console.log('Task 3')



//<-- industry level promise used real life example -->

const paymentSuccess = true;
const marks = 80;


function enroll() {
    console.log('Course Enrollment is on Processing ')

    const promise = new Promise (function (resolve,reject) {
        setTimeout(function () {
            if(paymentSuccess) {
                resolve();
            }else{
                reject('Payment failed');
            }
        },2000)
    });
    return promise;
}
function progress() {
    console.log('Course Enrollment is on progress ')

    const promise = new Promise (function (resolve,reject) {
        setTimeout(function () {
            if(marks >= 80) {
                resolve();
            }else{
                reject('You did not enough marks for certificate');
            }
        },2000)
    });
    return promise;
}

function getCertificate() {
    console.log('Your certificate is processing')

    const promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve('Congrats you got the certificate') 
         },1000)
    });

    return promise;
   
}


enroll()
.then(progress)
.then(getCertificate)
.then(function (value) {
    console.log(value);
})
.catch(function (err) {
    console.log(err);
})
