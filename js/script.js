const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray =[];

// handle mouse (creates an area around the location of the mouse to scan)
const mouseRx = {
    x: null,
    y: null, 
    radius: 150
}

window.addEventListener('mousemove', function(event){
    mouseRx.x = event.x;
    mouseRx.y = event.y;
    console.log(mouseRx.x, mouseRx.y);
});

ctx.fillStyle = 'white';
ctx.font = '30px Verdana';
ctx.fillText('A', 0, 40);
//scanning an area of 100x100 px by px for x,y,&color data for each px
ctx.strokestyle = 'white';
const data = ctx.getImagetData(0, 0, 100, 100);

