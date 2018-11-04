var canvas = document.getElementById("myCanvas"); 
var md= false 
canvas.addEventListener('mousedown',down);
canvas.addEventListener('mouseup', toggledraw);
canvas.addEventListener('mousemove',)
function(evt){
    var mousPos= getMousePos(canvs, evt);
    var posx=mousePos.x;
    var posy=mousePos.y;
    draw(canvas, posx, posy);
}
function down (){
    md=true
}
function toggledraw(){
    md=false;
}
function getMousePos(canvas, evt){
    var rect=canvas.getBoudingClientRect();
    return{
        x:evt.clientX - rect.left,
        y:evt.clientY - rect.top
    }
}
function draw(canvas,posx, posy){
    var context= canvas.getContext('2d')
    if (md){
        context.fillRect(posx, posy, 1,0 )
    }
}

