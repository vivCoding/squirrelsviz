let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// stores dataset
let squirrels = undefined;

// coordinates stuff, found using pandas
let minX = -73.9811585807616;
let minY = 40.7649106677138;
let maxX = -73.9497217674555;
let maxY = 40.8001185184892;
let diffX = 0.03143681330610093;
let diffY = 0.03520785077540012;

let dates = ["10062018", "10072018", "10082018", "10102018", "10122018", "10132018", "10142018", "10172018", "10182018", "10192018", "10202018"];

// fetch that data, make sure we get all of it by settgin limit to 3500
fetch("https://data.cityofnewyork.us/resource/vfnx-vebw.json?$limit=3500").then(response => {
    return response.json()
}).then(response => {
    console.log("getting data", response.length);
    squirrels = response;
    drawSquirrels();
})

// draw squirrels yippee
function drawSquirrels(includeDates=dates) {
    console.log("drawing squirrels");
    squirrels.forEach(squirrel => {
        if (includeDates.includes(squirrel.date)) {
            drawSquirrel(squirrel);
        }
    });
}

function drawSquirrel(squirrel) {
    let newCoords = convertCoord(squirrel.x, squirrel.y);
    if (squirrel.primary_fur_color == undefined) {
        drawDot(newCoords.x, newCoords.y, "white", "black");
    } else if (squirrel.primary_fur_color == "Cinnamon") {
        drawDot(newCoords.x, newCoords.y, "brown");
    } else {
        drawDot(newCoords.x, newCoords.y, squirrel.primary_fur_color);
    }
}

// convert lat long to canvas coords or something like that
function convertCoord(x, y) {
    let newX = ((x - minX) / diffX) * canvas.width;
    let newY = ((y - minY) / diffY) * canvas.height;
    return {
        x: newX,
        y: newY
    }
}

function drawDot(x, y, color, border="rgba(0,0,0,0)", size = 5) {
    ctx.fillStyle = color;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
    ctx.lineWidth = 2;
    ctx.strokeStyle = border;
    ctx.strokeRect(x - size / 2, y - size / 2, size, size);
}