let arraySuma = [];

let numeroApariciones = [];
let sumaDeAleatorios = 0;
let contador = 0;

for (let i = 0; i < 50; i++) {
  for (let lanzamientos = 0; lanzamientos < 2; lanzamientos++) {
    sumaDeAleatorios =
      sumaDeAleatorios + Math.floor(Math.random() * (6 - 1 + 1) + 1);
  }
  arraySuma[i] = sumaDeAleatorios;

  sumaDeAleatorios = 0;
}

console.log(arraySuma);

document.write(`<table><tbody>`);
document.write(`<tr><th>Suma</th><th>Apariciones</th>`);
for (let i = 2; i <= 12; i++) {
  document.write(`<tr>`);
  document.write(`<td>${i}</td>`);
  for (let j = 0; j < arraySuma.length; j++) {
    if (i === arraySuma[j]) {
      contador++;
    }
  }
  document.write(`<td>${contador}</td>`);

  numeroApariciones.push(contador);
  contador = 0;
  document.write(`</tr>`);
}
document.write(`</tbody></table>`);
console.log(numeroApariciones);
