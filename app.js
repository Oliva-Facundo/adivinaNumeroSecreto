const readlineSync = require('readline-sync')
const {generarNum, verificarAdivinanza} = require('./adivinanza')

const obtenerNumU = () => {
    return readlineSync.question('Ingresa un numero: ');
};

const juego = () => {
    const numSecreto = generarNum();
    let numAdivinado = 0;

    console.log('¡Bienvenido a Adivina el numero secreto!')
    console.log('Intenta adivinar el numero del 1 al 100.\n')

    while (numAdivinado !== numSecreto) {
        numAdivinado = obtenerNumU();
        verificarAdivinanza(numSecreto, numAdivinado)
    }
}

juego()