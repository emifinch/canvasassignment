var canvas = document.getElementById('canvas'); 
var context= canvas.getContext('2d');

var radius=8; 
var dragging=false;

context.lineWidth=radius*2;

var putPointer=function(e){
    if(dragging){
        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.arc(e.clientX, e.clientY,radius,0,Math.PI*2);
        context.fill();  
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
}

var engage=function(e){
    dragging=true;
    putPointer(e);
}

var disengage=function(){
    dragging=false;
    context.beginPath();
}

canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mousemove', putPointer);
canvas.addEventListener('mouseup',disengage);