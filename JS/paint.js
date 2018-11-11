var x;
var y;
var colors;
var node;
var style;

document.getElementById("canvas").addEventListener("click", startLine)
document.getElementById("canvas").addEventListener("mousedown", function () {
    document.getElementById("canvas").addEventListener("mousemove", startLine)
});
document.getElementById("canvas").addEventListener("mouseup", function () {
    document.getElementById("canvas").removeEventListener("mousemove", startLine)
});


function nameColors(e) {
    colors = e.value;
}

// function selectStyle() {
//     var x = document.getElementById("select").value;
//     if (x == 2) {
//         node.style.borderRadius = "0%";
//     } else {
//         node.style.borderRadius = "50%";
//     }
// }

// function selectSize{
//     var y = document.getElementById("size").value;
// 	val3 = parseInt(y);
//     node.style.width +=val3;
//     node.style.height +=val3;
// }

function startLine() {
    var canvas = document.getElementById("canvas");
    var node = document.createElement("div");
    node.style.borderRadius = "50%";
    node.style.width = "8px";
    node.style.height = "8px";
    node.style.backgroundColor = colors;
    node.style.position = "absolute";
    node.style.left = event.clientX - 705 + "px";
    node.style.top = event.clientY - 167 + "px";
    canvas.appendChild(node);
}


function openCanvas() {
    document.getElementById("new").style.display = "none";
    document.getElementById("canvas").style.display = "block";
}