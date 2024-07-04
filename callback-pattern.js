const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
    console.log('Course Enrollment is on Processing ')

    setTimeout(function () {
        if(paymentSuccess) {
            callback();
        }else{
            console.log('Payment failed');
        }
    },2000)
}
function progress(callback) {
    console.log('Course Enrollment is on Progress ')

    setTimeout(function () {
        if (marks >= 80) {
            callback();
        }else{
            console.log('You did not get the cerficate you have not enough marks')
        }
    },3000)
}

function getCertificate() {
    console.log('Your certificate on Processing')
    setTimeout(function () {
       console.log('Congrats you got the certificate') 
    },1000)
}

enroll(function () {
    progress(getCertificate)
})