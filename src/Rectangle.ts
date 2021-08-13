import Point from "./Point";
import Shape from "./Shape";
import { rotate } from "./utils";

export default class Rectangle extends Shape<[Point, Point, Point, Point]> {
    private pos: Point;
    private dim: Point;

    constructor(x: number = 0, y: number = 0, w: number = 1, h: number = 1, private angle: number = 0) {
        super([Point.from([x - w / 2, y - h / 2]), Point.from([x - w / 2, y + h / 2]), Point.from([x + w / 2, y + h / 2]), Point.from([x + w / 2, y - h / 2])]);

        for (const v of this.mesh) rotate(v, Point.from([x, y]), this.angle);

        this.pos = new Point(x, y);

        this.dim = new Point(w, h);
    }

    public get a() {
        return this.angle;
    }

    public set a(angle: number) {
        this.angle = angle;

        this.recalculateMesh();
    }

    public get x() {
        return this.pos.x;
    }

    public set x(x: number) {
        this.pos.x = x;

        this.recalculateMesh();
    }

    public get y() {
        return this.pos.y;
    }

    public set y(y: number) {
        this.pos.y = y;

        this.recalculateMesh();
    }

    public get w() {
        return this.dim.x;
    }

    public set w(w: number) {
        this.dim.x = w;

        this.recalculateMesh();
    }

    public get h() {
        return this.dim.y;
    }

    public set h(h: number) {
        this.dim.y = h;

        this.recalculateMesh();
    }

    private recalculateMesh() {
        this.mesh = [
            Point.from([this.pos.x - this.dim.x / 2, this.pos.y - this.dim.y / 2]),
            Point.from([this.pos.x - this.dim.x / 2, this.pos.y + this.dim.y / 2]),
            Point.from([this.pos.x + this.dim.x / 2, this.pos.y + this.dim.y / 2]),
            Point.from([this.pos.x + this.dim.x / 2, this.pos.y - this.dim.y / 2]),
        ];

        for (const v of this.mesh) rotate(v, Point.from([this.pos.x, this.pos.y]), this.angle);
    }
}
