var mouseevent="empty";
var lastpositionofx,lastpositonofy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthofline=1;
canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseevent="mouseDown";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseUP";
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e)
{
currentpositionofx=e.clientX-canvas.offsetLeft;
currentpositionofy=e.clientY-canvas.offsetTop;
if(mouseevent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.arc(currentpositionofx,currentpositionofy,40,0,2*Math.PI);
    ctx.stroke();

}
lastpositionofx=currentpositionofx;
lastpositonofy=currentpositionofy;
}
