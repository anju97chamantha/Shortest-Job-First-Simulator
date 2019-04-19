var canvas = document.querySelector('canvas');
canvas.width = parseInt(window.innerWidth / 52) * 52 - 52 * 2;
canvas.height = parseInt(window.innerHeight / 124) * 124;
var c = canvas.getContext('2d');

var x;
var y;
var i;

function canvasInitiate() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    x = 0;
    y = 0
    i = 0;
    var color = random_bg_color();
}



function changeColor() {
    color = random_bg_color();
}

async function execute(speed, name) {


    if (canvas.width <= x) {
        y = y + 70;
        x = 0;
    }
    if (canvas.height <= y) {
        c.clearRect(0, 0, canvas.width, canvas.height);
        y = 0;
        x = 0;
    }
    draw(c, x, y, color, i, name);
    x = x + 50 + 2;
    await timeout(speed);
    i++;
}

function random_bg_color() {
    var x = Math.floor(Math.random() * 220);
    var y = Math.floor(Math.random() * 220);
    var z = Math.floor(Math.random() * 220);
    var bgColor = "rgb(" + x + "," + y + "," + z + "," + 0.8 + ")";

    return bgColor;
}

function draw(c, x, y, color, i, name) {
    c.fillStyle = color;
    c.fillRect(x, y, 50, 50);
    c.fillStyle = '#000080';
    c.font = "10px Comic Sans MS";
    c.fillText(i, x, y + 62);
    c.font = "15px Comic Sans MS";
    c.fillStyle = '#fff';
    c.fillText(name, x + 15, y + 30);

}