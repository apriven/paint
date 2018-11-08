
// function Lalalal() {
//     var pen = document.createElement("div");
//     document.getElementsByTagName("div")[0].setAttribute("position", "relative");
//     var drawArea = document.getElementById("main");
//     drawArea.appendChild(pen);
    
//     var x = event.clientX;
//     var y = event.clientY;
//     pen.style.borderRadius = "50%";
//     pen.style.left = x + "px";
//     pen.style.top = y + "px";
//     pen.style.position = "absolute";
//     pen.style.backgroundColor = color;
//     pen.style.height = height;
//     pen.style.width = width;
//     pen.style.border = border;  
// }

var x;
var y;
var colors;

document.getElementById("canvas").addEventListener("click",startLine)
// function showPosition(){
//     x = event.offsetX;
//     y = event.offsetY;
//     startLine();
// }
function nameColors(e){
colors=e.value;
}
function startLine(){
    var canvas = document.getElementById("canvas");
    var node = document.createElement("div");
    node.style.borderRadius="50%";
    node.style.width="8px";
    node.style.height="8px";
    node.style.backgroundColor=colors;
    node.style.position="absolute";
    node.style.left=event.clientX - 200+ "px";
    node.style.top=event.clienty+ "px";
    canvas.appendChild(node);
}
