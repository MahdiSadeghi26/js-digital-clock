// variables
let $ = document;
const hourFiled = $.querySelector("#hour");
const minuteFiled = $.querySelector("#minute");
const secondFiled = $.querySelector("#seconds");

// functions
setInterval(() => {
    let hours=new Date().getHours()
    let minute=new Date().getMinutes()
    let second=new Date().getSeconds()
    hourFiled.innerHTML=hours
    minuteFiled.innerHTML=minute
    secondFiled.innerHTML=second
    if (minuteFiled.innerHTML<10) {
        minuteFiled.innerHTML=`0${minute}`
    }
    if (secondFiled.innerHTML<10) {
        secondFiled.innerHTML=`0${second}`
    }    
}, 1000);
// event Listeners

