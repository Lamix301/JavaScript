//Pedir un operador
const operador = prompt("Escribe el operador: +,- , *, /");
//Pedir un numero
const a = parseFloat(prompt("Primer operando: "));
//Pedir otro numero
const b = parseFloat(prompt("Segundo operando: "));
//Realizar el calculo segun el operador
// alert(eval("" + a + " + operador + " + b));//Ojo, no usar nunca eval en produccion
let resultado;
if(operador === '+'){
    resultado = a + b;
} else if (operador === "-") {
    resultado = a - b;
} else if (operador === "*") {
    resultado = a * b ;
} else {
    resultado = a / b;
}
//Mostrar el resultado
alert("El resultado es: " + resultado);