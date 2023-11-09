function tablaMultiplicar(numero) {
  for (let i = 1; i <= 10; i++) {
    
    document.write(`${numero} x ${i} = ${i * numero}<br>`);
  }
}
const numero = parseInt(prompt("Ingrese un numero"));
document.write(`<h1>Tabla de Multiplicar de ${numero}</h1>`);

tablaMultiplicar(numero);
