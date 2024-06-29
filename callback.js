function fetchData(callback) {
    setTimeout(function () {
        const data = "some data"
        callback(data)
    },0)
}

function processData(data) {
    console.log("Data Received :"+data)

}
fetchData(processData);