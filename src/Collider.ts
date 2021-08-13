import Shape from "./Shape";
import { edges, orthogonal, overlap, project } from "./utils";
import Vector from "./Vector";

export default class Collider<A extends Shape = Shape, B extends Shape = Shape> {
    constructor(public readonly a: A, public readonly b: B) {}

    public collide(method: "AABB" | "SAT" = "SAT") {
        if (method === "SAT") {
            const sides = edges(this.a.vertices.map((p) => new Vector(p.x, p.y)).concat(edges(this.b.vertices.map((p) => new Vector(p.x, p.y)))));

            const axes = sides.map((side) => orthogonal(side).normalized);

            for (const axis of axes) {
                if (
                    !overlap(
                        project(
                            this.a.vertices.map((p) => new Vector(p.x, p.y)),
                            axis
                        ),
                        project(
                            this.b.vertices.map((p) => new Vector(p.x, p.y)),
                            axis
                        )
                    )
                )
                    return false;
            }

            return true;
        }

        throw new ReferenceError("AABB collision is not implemented");
    }
}
