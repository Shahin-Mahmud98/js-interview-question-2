document.getElementById('myList').addEventListener('click',
    function (e){
        if (e.target.nodeName === "LI") {
            console.log(e.target.textContent)
        }
    }
)