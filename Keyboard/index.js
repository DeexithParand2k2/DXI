//variables
var temp = document.getElementsByTagName("div")[0];
var text,value;

function getKey(){
    
    window.addEventListener("keypress", function(e){
        text = e.key;
        keyCode = e.keyCode;
        temp.innerHTML = text.toUpperCase() + "&nbsp;:&nbsp;" + keyCode;
    },true);
}