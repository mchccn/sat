import Collider from "./Collider";
import Rectangle from "./Rectangle";

const canvas = document.querySelector("canvas")!;
export const ctx = canvas.getContext("2d")!;
canvas.width = 1600;
canvas.height = 900;

ctx.translate(canvas.width / 2, canvas.height / 2);

const a = new Rectangle(750 - canvas.width / 2, 500 - canvas.height / 2, 150, 100, 1);
const b = new Rectangle(900 - canvas.width / 2, 400 - canvas.height / 2, 125, 175, 0.5);

const collider = new Collider(a, b);

const EPOCH = Date.now();

let Δ = 0;
let Ω = 0;

function update(γ: number) {
    const θ = γ / 1000;

    Δ = θ - Ω;

    Ω = θ;

    ctx.clearRect(-canvas.width, -canvas.height, canvas.width * 2, canvas.height * 2);

    if (keys.get("KeyW")) b.y -= 250 * Δ;
    if (keys.get("KeyA")) b.x -= 250 * Δ;
    if (keys.get("KeyS")) b.y += 250 * Δ;
    if (keys.get("KeyD")) b.x += 250 * Δ;
    if (keys.get("KeyQ")) b.a -= 2.5 * Δ;
    if (keys.get("KeyE")) b.a += 2.5 * Δ;

    if (keys.get("ArrowUp")) a.y -= 250 * Δ;
    if (keys.get("ArrowLeft")) a.x -= 250 * Δ;
    if (keys.get("ArrowDown")) a.y += 250 * Δ;
    if (keys.get("ArrowRight")) a.x += 250 * Δ;
    if (keys.get("KeyO")) a.a -= 2.5 * Δ;
    if (keys.get("KeyP")) a.a += 2.5 * Δ;

    const colliding = collider.collide();

    rect(a, colliding ? "red" : "blue");

    rect(b, colliding ? "red" : "blue");
}

setInterval(() => update(Date.now() - EPOCH), 1000 / 60);

function rect(rect: Rectangle, color: string) {
    ctx.fillStyle = color;

    ctx.beginPath();

    ctx.moveTo(rect.vertices[0][0], rect.vertices[0][1]);

    for (const [x, y] of rect.vertices.slice(1)) ctx.lineTo(x, y);

    ctx.closePath();

    return ctx.fill();
}

const keys = new Map();

document.addEventListener("keydown", (e) => {
    keys.set(e.code, true);
});

document.addEventListener("keyup", (e) => {
    keys.delete(e.code);
});
