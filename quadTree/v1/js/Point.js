class Point {
    constructor(x, y, r) {
        this.pos = new Vec2(x, y);
        this.r = r;

        points.push(this);
    }
}