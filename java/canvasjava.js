var canvas = document.getElementById("canvas"); 
var context= canvas.getContext('2d');

var radius=10; 

var putPoint=function(e){
    context.beginPath():
    context.arc(e.clientX, e.clientY,radius,0,Math.PI*2);
    context.fill(); 
}
canvas.addEventListener('mousedown', putPoint);

