class Input {
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
            this.neurons.push(new Neuron(this.xPos, yPosition, this.radius, `rgba(0,0,0,${Math.random()})`, 1));
            yPosition += ySpacing;
        }
    }

    draw(globalIterator) {
        if (globalIterator < 10) {
            this.neurons.forEach((neuron) => {
                neuron.draw();
            });
        }
        if (globalIterator > 10 && globalIterator < 30) {
            this.neurons.forEach((neuron) => {
                neuron.x += (canvas.width/4 - canvas.width/12)/20;
                neuron.draw();
            });
        }
        if (globalIterator == 30) {
            this.neurons.forEach((neuron) => {
                neuron.x = canvas.width/12;
            })
        }
    }

    update() {
        this.draw();
    }
}