let points = [];

function setup() {
    createCanvas(800, 800);
    const qt = new Qtree(new Rect(new Vec2(width/2, height/2), width / 2, height / 2), 4);

    for (let i = 0; i <= 1; i++) {
        p = new Point(100, 100, 10);
        qt.insert(p);
    }
}

function draw() {
    stroke(255);
    background(0);
    for (let p = 0; p < points.length; p++) {
        strokeWeight(20);
        point(points[p].pos.x, points[p].pos.y);
    }
}