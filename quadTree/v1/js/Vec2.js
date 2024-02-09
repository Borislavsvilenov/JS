class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add(vec) {
        return new Vec2(this.x + vec.x, this.y + vec.y);
    }

    sub(vec) {
        return new Vec2(this.x - vec.x, this.y - vec.y);
    }

    scale(scaler) {
        return new Vec2(this.x * scaler, this.y * scaler);
    }

    mag() {
        return Math.hypot(this.x ** 2 + this.y ** 2);
    }

    norm() {
        mag = this.mag();
        return (this.x / mag, this.y / mag);
    }

    dot(vec) {
        return (this.x * vec.x + this.y * vec.y);
    }
}