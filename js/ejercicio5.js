function minusculasOMayusculas(frase) {
    const fraseMinuscula = frase.toLowerCase();
    const fraseMayuscula = frase.toLocaleUpperCase();
    if (frase === fraseMayuscula) {
        document.write(`La frase "${frase}" está formada sólo por mayúsculas`);
    }else if(frase === fraseMinuscula){
        document.write(`La frase "${frase}" está formada sólo por minúculas`);
    }else{
        document.write(`La frase "${frase}" está formada por mayúsculas y minúsculas`);
    }
  }
  
  const frase = prompt("Ingrese una frase");
  minusculasOMayusculas(frase);
  