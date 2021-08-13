import Point from "./Point";

export default abstract class Shape<Mesh extends Point[] = Point[]> {
    constructor(protected mesh: Mesh) {}

    public get vertices() {
        return this.mesh.map((v) => Point.from(v.toArray()));
    }
}
