function greet() {
    console.log('Hello');
}

// function expression created on the fly
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);