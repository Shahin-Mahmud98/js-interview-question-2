function fetchData() {
    return new Promise (function (resolve,reject) {
        //Simulating an asynchronous Operation
        setTimeout(function () {
            const data = "Some data";
            resolve(data);
        },2000)
    })
}

fetchData()
.then(function (data) {
    console.log("Data Received : " + data)
})
.catch(function (error) {
    console.log("Error Occured :"+error)
});