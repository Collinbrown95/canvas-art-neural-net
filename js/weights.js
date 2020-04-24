class Weights {
    constructor(layer_i, layer_j) {
        this.layer_i = layer_i;
        this.layer_j = layer_j;
        // Matrix to hold the weights between layers i and j
        this.weightMatrix = [];
        for (let i = 0; i < this.layer_i.neurons.length; i++) {
            this.weightMatrix.push([]);
        }  
        this.assembleEdges();
    }

    assembleEdges() {
        for (let i = 0; i < this.layer_i.neurons.length; i++) {
            for (let j = 0; j < this.layer_j.neurons.length; j++) {
                this.weightMatrix[i][j] = new Edge(this.layer_i.neurons[i], this.layer_j.neurons[j]);
            }
        }
    }

    draw(globalIterator) {
        for (let i = 0; i < this.layer_i.neurons.length; i++) {
            for (let j = 0; j < this.layer_j.neurons.length; j++) {
                this.weightMatrix[i][j].draw();
            }
        }
    }
}