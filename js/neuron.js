class Neuron {
    constructor(x, y, radius, color, shadowBlur) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.shadowBlur = shadowBlur;

        this.shadowColor = '#e3eaef';
    }

    draw() {
        c.save();
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color;
        c.shadowColor = this.shadowColor;  // colour of the shadow on each ministar object
        c.shadowBlur = this.shadowBlur;  // Number of pixels on shadow blur
        c.fill()
        c.closePath()
        c.restore();
    }

    update() {
        this.draw();
    }
}