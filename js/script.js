// variables
let $ = document;
const hourFiled = $.querySelector("#hour");
const minuteFiled = $.querySelector("#minute");
const secondFiled = $.querySelector("#seconds");

// functions
function setTime() {
  setInterval(() => {
    hourFiled.innerHTML=new Date().getHours();
    minuteFiled.innerHTML = new Date().getMinutes();
    secondFiled.innerHTML = new Date().getSeconds();
    if (minuteFiled.innerHTML<10) {
        minuteFiled.innerHTML=`0${new Date().getMinutes()}`
    }
    if (secondFiled.innerHTML<10) {
        secondFiled.innerHTML=`0${new Date().getSeconds()}`
    }
  }, 1000);
}

// event Listeners
window.addEventListener("load", setTime);
