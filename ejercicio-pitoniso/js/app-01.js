/**
 * Juego del pitoniso
 * version sin break
 */

//Generar numero aleatorio
const secretNumber = Math.floor(Math.random()*100) + 1;
//Inicializar variables
const maxIntentos = 6;
let intentos = 0;
let acierto = false//Bandera para saber si el jugador ha adivinado
debugger;
//Miramos si se cumple la condición:
//Jugar mientras no hemos acertado y tenemos intentos
while (intentos < maxIntentos && !acierto) {
    let numeroJugador = parseInt(prompt("Introduce un número entre 1 y 100"));
//Sino acierta damos ayuda al jugador de si es mayor o menor
//Si acierta ha ganado 
if(numeroJugador === secretNumber){
    acierto = true;
} else if (numeroJugador < secretNumber) {
    alert("No llegas");
}else {
    alert("Te pasaste")
}
//Incrementos el numero de intentos
intentos++;
}



//Mostramos has ganado si ha acertado
//Mostramos has perdido si no ha ganado
if (acierto){
    alert("Has ganado!! el número era " + secretNumber);
}else{
    alert("Has perdido!! el número era " + secretNumber);
}