var sKorea=[5,8,4];
var germany=[14,10,7];
var slate=document.getElementById("screen");

var circles=function(country){
    var c=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    slate.appendChild(c);
};

skorea.addEventListener("click", circles("SouthKorea"));
ger.addEventListener("click", circles("Germany"));
