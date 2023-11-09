const perimetroRectangulo = (ladoA, ladoB) => {
    const resultado = 2*(ladoA + ladoB);
    return resultado;
}
const ladoA = parseInt(prompt('Ingrese el valor del largo del rectángulo'))
const ladoB = parseInt(prompt('Ingrese el valor del ancho del rectángulo'))
let resultadoPerimetro;

resultadoPerimetro = perimetroRectangulo(ladoA, ladoB);

document.write(`El perimetro es: ${resultadoPerimetro}`);