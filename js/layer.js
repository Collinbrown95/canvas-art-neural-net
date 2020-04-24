class Layer {
    constructor(xPos, yStart, yEnd, numNeurons, radius, offset, colour) {
        this.xPos = xPos;
        this.yStart = yStart;
        this.yEnd = yEnd;
        this.radius = radius;
        this.numNeurons = numNeurons;
        this.offset = offset;
        this.colour = colour;
        this.neurons = [];
        this.assembleLayer();
        
    }

    assembleLayer() {
        // the current y position
        let yPosition = this.yStart + this.offset
        // how far apart each neuron should be
        let ySpacing = 75;
        for (let i = 0; i < this.numNeurons; i++) {
            this.neurons.push(new Neuron(this.xPos, yPosition, this.radius, this.colour, 1));
            yPosition += ySpacing;
        }
    }

    draw() {
        this.neurons.forEach((neuron) => {
            neuron.draw();
        });
    }

    update() {
        this.draw();
    }
}