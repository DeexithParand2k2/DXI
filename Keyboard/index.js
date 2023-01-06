//variables
var temp = document.getElementsByTagName("div")[0];
var text,value,ctrlText;

window.addEventListener("keypress", function(e){
    text = e.key;
    ctrlText = e.ctrlKey;
    keycode = e.keyCode;

    temp.innerHTML = text.toUpperCase() + "&nbsp;:&nbsp;" + keycode + "&nbsp;";
},true);