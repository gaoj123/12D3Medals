var sKorea=[5,8,4];
var germany=[14,10,7];
var slate=document.getElementById("screen");
var ger=document.getElementById("Germany");
var skorea=document.getElementById("SK");

var germ=function(e){
    var x=125;
    var c1=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx",x);
    c1.setAttribute("cy",250);
    c1.setAttribute("r", 0);
    c1.setAttribute("fill", "gold");
    slate.appendChild(c1);
    x+=125;
    var c2=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c2.setAttribute("cx",x);
    c2.setAttribute("cy",250);
    c2.setAttribute("r", 0);
    c2.setAttribute("fill", "silver");
    slate.appendChild(c2);
    x+=125;
    var c3=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c3.setAttribute("cx",x);
    c3.setAttribute("cy",250);
    c3.setAttribute("r", 0);
    c3.setAttribute("fill", "bronze");
    slate.appendChild(c3);
    d3.selectAll("circle")
	.data(germany)
	.attr("r",function(d) {return d*5;});
    //var medalCircles=d3.selectAll("circle");
    //medalCircles.data(germany);
    //medalCircles.attr("r",function(d) {return d*5;});
};

var southK=function(e){
    var x=125;
    var c1=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx",x);
    c1.setAttribute("cy",250);
    c1.setAttribute("r", 0);
    c1.setAttribute("fill", "gold");
    slate.appendChild(c1);
    x+=125;
    var c2=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c2.setAttribute("cx",x);
    c2.setAttribute("cy",250);
    c2.setAttribute("r", 0);
    c2.setAttribute("fill", "silver");
    slate.appendChild(c2);
    x+=125;
    var c3=document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c3.setAttribute("cx",x);
    c3.setAttribute("cy",250);
    c3.setAttribute("r", 0);
    c3.setAttribute("fill", "bronze");
    slate.appendChild(c3);
    d3.selectAll("circle")
	.data(sKorea)
	.attr("r",function(d) {return d*5;});
    //var medalCircles=d3.selectAll("circle");
    //medalCircles.data(sKorea);
    //medalCircles.attr("r", function(d) {return d*5;});
};

skorea.addEventListener("click", southK);
ger.addEventListener("click", germ);
