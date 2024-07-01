const STYLESHEET_KEY = "stylesheet";
var num = 0;

function toggleStyleSheet(){ 
    var styleElement = document.getElementById("csslink");

    var fileName = styleElement.getAttribute("href");

    var newFileName = "style.css"; 
    if(fileName == "style2.css"){
        newFileName = "style.css";
    }
    else{
        newFileName = "style2.css";
    }

    styleElement.setAttribute("href", newFileName);
    localStorage.setItem(STYLESHEET_KEY, newFileName);
}

window.onload = function(){ 
    var styleSheetValue = localStorage.getItem(STYLESHEET_KEY);

    var styleElement = document.getElementById("csslink");
    styleElement.setAttribute("href", styleSheetValue);

    if(styleSheetValue !=null){
        styleElement.setAttribute("href",styleSheetValue);
    } else {
        styleElement.setAttribute("href","style.css");
    }
}


