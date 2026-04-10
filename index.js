const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.style.backgroundColor = "rgb(120, 0, 100)";

let rectSize = 200;

//drawing line with following methods
//ctx.beginPath();   first using this to start a new path
//ctx.moveTo(x1, y1); we move to specific starting place from which we want to start drawing
//ctx.lineTo(x2, y2); this is where we want the line end
//ctx.stroke(); making the line visible ?

ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();

ctx.strokeStyle = "rgb(0, 0, 0)";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(0, canvas.height);
ctx.lineTo(canvas.width, 0);
ctx.stroke();

//fillRect method is basicaly to draw rectangle filled with color
// ctx.fillRect(x, y, width, heigth);

ctx.fillStyle = "rgba(200, 0, 150, 0.80)";
ctx.fillRect(
  (canvas.width - rectSize) / 2,
  (canvas.height - rectSize) / 2,
  rectSize,
  rectSize,
);
