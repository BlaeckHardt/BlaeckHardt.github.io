document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid");
    const totalCircles = 80; // 10x10 grid
    const randomIndexes = getRandomIndexes(totalCircles, 15); // 15 random orange circles

    for (let i = 0; i < totalCircles; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Si el índice está en el array de randomIndexes, añadimos la clase "active"
        if (randomIndexes.includes(i)) {
            circle.classList.add("active");
        }

        gridContainer.appendChild(circle);
    }
});

// Función para obtener índices aleatorios
function getRandomIndexes(total, count) {
    const indexes = [];
    while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * total);
        if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
        }
    }
    return indexes;
}


const grid_2 = document.getElementById('grid-2');

// Total de círculos que queremos crear
const totalCircles_2 = 80;
let k = 0;  // Inicializamos la variable j

for (let j = 0; j < totalCircles_2; j++) {
    const circles = document.createElement('div');
    circles.classList.add('circle');
    
    // Aplicamos una fórmula para decidir el color
    if ((2+6*k) === j) {  // Ejemplo: colorear múltiplos de 5
        circles.classList.add('active');
        k++;
    }
    
    grid_2.appendChild(circles);
}
