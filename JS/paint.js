var x;
var y;
var colors;
var node;

document.getElementById("canvas").addEventListener("click",startLine)
document.getElementById("canvas").addEventListener("mousedown",function(){
    document.getElementById("canvas").addEventListener("mousemove",startLine)    
});
document.getElementById("canvas").addEventListener("mouseup",function(){
    document.getElementById("canvas").removeEventListener("mousemove",startLine)    
});


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
    node.style.left=event.clientX - 355 + "px";
    node.style.top=event.clientY  - 200 + "px";
    canvas.appendChild(node);
}

function select() {
    var x = document.getElementById("select").value;
    val1 = parseInt(x);
    if (val1 ==2){
        node.style.borderRadius="0%";
    }else{
        node.style.borderRadius="50%";
    }  
}