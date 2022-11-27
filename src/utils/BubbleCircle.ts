export class Circle {
    x: number = 0;
    y: number = 0;
    alpha: number = 0.1 + Math.random() * 0.65;
    scale: number = 0.3 + Math.random() * 0.35;
    velocity: number = Math.random();
    
    constructor(width: number, height: number) {
        this.init(width, height);
    };

    init(width: number, height: number) {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.alpha = 0.1 + Math.random() * 0.65;
        this.scale = 0.3 + Math.random() * 0.35;
        this.velocity = Math.random();
    }

    draw(ctx: CanvasRenderingContext2D, width: number, height: number) {
        if (this.alpha <= 0) {
            this.init(width, height);
        }
        this.y -= this.velocity ?? Math.random();
        this.alpha -= 0.0006;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.scale * 10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(183, 38, 27,' + this.alpha + ')';
        ctx.fill();
    };
}