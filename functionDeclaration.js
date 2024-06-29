function showMessage(message) {
    setTimeout(function(){
        const datamessage = "this is data"
        message(datamessage)
    },2000)
}
console.log("received :" + datamessage)