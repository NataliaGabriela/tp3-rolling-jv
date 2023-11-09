const ciudades = [];
let i = 0;


do {

   ciudades[i] = prompt('Ingrese una ciudad');
   i++;
} while (confirm('¿Desea ingresar otra ciudad?'));



document.write(`<p>El arreglo de las ciudades tiene ${ciudades.length} elementos</p><br>`);

document.write(`<p>Elemento 1er posición: ${ciudades[0]} </p><br>`);
document.write(`<p>Elemento 3er posición: ${ciudades[3]} </p><br>`);
document.write(`<p>Elemento última posición: ${ciudades[ciudades.length - 1]} </p><br>`);

ciudades.push('París');
document.write(`<p>Elemento última posición: ${ciudades[ciudades.length - 1]} </p><br>`);

document.write(`<p>Elemento 2da posición: ${ciudades[2]} </p><br>`);
ciudades.splice(2,0,'Barcelona');
document.write(`<p>Elemento 2da posición: ${ciudades[2]} </p><br>`);

document.write(`<h1>Arreglo de Ciudades</h1>`);
document.write(`<ul>`)
for (let i = 0; i < ciudades.length; i++) {
    document.write(`<li>Elemento: ${ciudades[i]}</li>`)
    
}
document.write(`</ul>`)