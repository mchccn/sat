import Point from "./Point";
import Vector from "./Vector";

export function rotate(p: Point, t: Point, a: number) {
    const s = Math.sin(a);
    const c = Math.cos(a);

    p[0] -= t[0];
    p[1] -= t[1];

    const nx = p[0] * c - p[1] * s;
    const ny = p[0] * s + p[1] * c;

    p[0] = nx + t[0];
    p[1] = ny + t[1];

    return p;
}

export function project(vertices: Vector[], axis: Vector) {
    const dots = vertices.map((vertex) => vertex.dot(axis));

    return [Math.min(...dots), Math.max(...dots)] as [number, number];
}

export function direction(point0: Vector, point1: Vector) {
    return new Vector(point1.x - point0.x, point1.y - point0.y);
}

export function edges(vertices: Vector[]) {
    return vertices.map((_, i) => direction(vertices[i], vertices[(i + 1) % vertices.length]));
}

export function orthogonal(vector: Vector) {
    return new Vector(vector.y, -vector.x);
}

export function overlap(projection1: [number, number], projection2: [number, number]) {
    return Math.min(...projection1) <= Math.max(...projection2) && Math.min(...projection2) <= Math.max(...projection1);
}
