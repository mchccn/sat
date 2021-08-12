const canvas = document.querySelector("canvas")!;
export const ctx = canvas.getContext("2d")!;
canvas.width = 1600;
canvas.height = 900;

const EPOCH = Date.now();

let Δ = 0;
let Ω = 0;

function update(γ: number) {
    const θ = γ / 1000;

    Δ = θ - Ω;

    Ω = θ;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => update(Date.now() - EPOCH), 1000 / 60);
