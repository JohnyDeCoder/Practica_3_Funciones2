function greet() {
    console.log('Hello');
}

// function expression created on the fly
let logGreeting = (miParametro) => miParametro();

logGreeting(function () {
    console.log('Hello from a function created on the fly');
})

logGreeting(greet);