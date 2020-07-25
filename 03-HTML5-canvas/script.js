const canvas=document.querySelector('#board');
const ctx=canvas.getContext('2d');
canvas.height=window.innerHeight;
canvas.width=window.innerWidth;
ctx.lineCap='round';
ctx.lineJoin='round';
let isDrawing=false;
let lastX=0;
let lastY=0;
ctx.lineWidth=2;
let hue=0;
let direction=true;
//for web view
function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastX=e.offsetX;
    lastY=e.offsetY;
    if(ctx.lineWidth<=1 || ctx.lineWidth>=100) direction=!direction;
    if(direction){
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }
    hue++;
    if(hue>=360) hue=0;
}

//for phone view
function drawPhone(e){

    if(!isDrawing) return;
    ctx.strokeStyle=`hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.touches[0].pageX,e.touches[0].pageY);
    ctx.stroke();
    lastX=e.touches[0].pageX;
    lastY=e.touches[0].pageY;
    if(ctx.lineWidth<=1 || ctx.lineWidth>=100) direction=!direction;
    if(direction){
        ctx.lineWidth++;
    }
    else{
        ctx.lineWidth--;
    }
    hue++;
    if(hue>=360) hue=0;
}



canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mousedown',(e)=>
{
    isDrawing=true;
    lastX=e.offsetX;
    lastY=e.offsetY;
});
canvas.addEventListener('mouseup',()=>isDrawing=false);
canvas.addEventListener('mouseout',()=>isDrawing=false);

//for mobile view
canvas.addEventListener('touchstart',(e)=>
{
    isDrawing=true;
    lastX=e.touches[0].pageX;
    lastY=e.touches[0].pageY;
});
canvas.addEventListener('touchmove',drawPhone);
canvas.addEventListener('touchend',()=>isDrawing=false);
canvas.addEventListener('touchcancel',()=>isDrawing=false);