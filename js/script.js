const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray =[];

// handle mouse
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
ctx.font = '30px Verdana';
ctx.fillText('A', 0, 40);

