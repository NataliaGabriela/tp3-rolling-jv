function esParOImpar(numero) {
  if (numero % 2 === 0) {
    document.write(`El numero ${numero} es Par`);
  } else {
    document.write(`El numero ${numero} es Impar`);
  }
}

const numero = parseInt(prompt("Ingrese un numero entero"));
esParOImpar(numero);
