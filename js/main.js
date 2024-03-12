/**
 * La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

 */



//obtenemos el texto del input
let mensaje = window.prompt("Digite texto");

console.log(encriptarTexto(mensaje));



//Realizamos encriptación
function encriptarTexto(texto) {

    let matrizVocales = [["e", "enter"],  ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    mensajeEncriptado = texto.toLowerCase();
    console.log(mensajeEncriptado);

    for (let i = 0; i < matrizVocales.length; i++) {
        
        if(mensajeEncriptado.includes(matrizVocales[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizVocales[i][0], matrizVocales[i][1]);
        }
    }

    //console.log(mensajeEncriptado);
   return mensajeEncriptado;
   

}