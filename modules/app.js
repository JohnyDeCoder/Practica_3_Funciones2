require('./greet');

function greet() {
    console.log('Hello');
}

// function expression created on the fly
let logGreeting = (miParametro) => miParametro();

logGreeting(function () {
    console.log('Hello from a function created on the fly');
})

// interpolación de strings "clásica"
let logGreeting1 = (miNombre, miColor) => {
    console.log("¡Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}

logGreeting(greet);
logGreeting1("Johny", "Azul");