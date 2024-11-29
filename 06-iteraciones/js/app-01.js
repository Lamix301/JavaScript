//Sirven para repetir pasos
//Mientras se cumpla una condición
// let clicks = 0
// while(true){
//     alert("Has clicado " + clicks + " veces!, pringao");
//     // clicks = clicks + 1;
//     clicks++;
// }
const pin = "1234";
let respuesta = "";
let intentos = 0;

while(respuesta !== pin && intentos < 3){
    respuesta = prompt("Escribe un pin");
    intentos++;
}
if (respuesta === pin) {
    alert("Has acertado!!!");
} else {
    alert("Lo has intentado demasiadas veces.");
}