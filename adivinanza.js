const generarNum = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const verificarAdivinanza = (numSecreto, numAdivinado) => {
  if (numAdivinado === numSecreto) {
    console.log("¡Felicidades! ¡Adivinaste!");
  } else if (numAdivinado > numSecreto) {
    console.log("El numero secreto es menor");
  } else {
    console.log("El numero secreto es mayor");
  }
};

module.exports = {
  generarNum,
  verificarAdivinanza,
};
