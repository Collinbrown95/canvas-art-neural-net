class Edge {
    constructor(n1, n2) {
        this.x0 = n1.x;
        this.y0 = n1.y;
        this.x1 = n2.x;
        this.y1 = n2.y;
    }

    draw() {
        c.beginPath()
        c.moveTo(this.x0, this.y0)
        c.lineTo(this.x1, this.y1);
        c.strokeStyle = "white";
        c.fillStyle = "white"
        // c.shadowColor = '#e3eaef';  // colour of the shadow on each ministar object
        // c.shadowBlur = 30;  // Number of pixels on shadow blur
        c.fill();
        c.stroke()
        c.closePath()
    }
}