const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const backgroundGradient = c.createLinearGradient(0, 0, 0, canvas.height);
backgroundGradient.addColorStop(0, "#3f586b");
backgroundGradient.addColorStop(1, "#171e26");

// Global parameters
let globalIterator = 0;
// Animation objects
let input = new Input(canvas.width/12, 100, 500, 8, 10, 0, "rgba(0,0,0,0.5)");

let layer1 = new Layer(canvas.width/4, 100, 500, 8, 10, 0, "rgba(255,255,255,0.5)");
let layer2 = new Layer(canvas.width/2, 100, 500, 6, 10, 75, "rgba(255,255,255,0.5)");
let layer3 = new Layer(3*canvas.width/4, 100, 500, 4, 10, 150, "rgba(255,255,255,0.5)");

let weights1 = new Weights(layer1, layer2);
let weights2 = new Weights(layer2, layer3);

function animate() {
    requestAnimationFrame(animate);
    // Fill background
    c.fillStyle = backgroundGradient;
    c.fillRect(0, 0, canvas.width, canvas.height);

    // Draw layers
    input.draw(globalIterator);
    layer1.draw();
    layer2.draw();
    layer3.draw();

    // Draw edges
    weights1.draw();
    weights2.draw();

    if (globalIterator > 100) {
        globalIterator = 0;
    } else {
        globalIterator++;
    }
}

animate();