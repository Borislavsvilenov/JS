let n = 6;
let boardSize = 300;
let canvasSize = boardSize * n;

function setup() {
  createCanvas(canvasSize, canvasSize);
  background(0);
  NestBoards(n, 0, 0, boardSize * n);
}

function draw() {
  background(0);
  NestBoards(n, 0, 0, boardSize * n);
}

