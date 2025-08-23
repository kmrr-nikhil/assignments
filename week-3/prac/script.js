let ctrl=0;
function callback(){
document.querySelectorAll("h4")[2].innerHTML=ctrl
    ctrl=ctrl+1;
}

setInterval(callback,1000);

