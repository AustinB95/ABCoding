var circle = document.getElementById("circle");
var topButtom = document.getElementById("topButtom");
var bottomButton = document.getElementById("bottomButton");

var rotateValue = circle.style.transform;
var rotateSum;

topButton.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}



bottomButton.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}