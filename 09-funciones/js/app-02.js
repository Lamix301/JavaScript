//Crea una funcion a la que se le pase un
//numero e imprima
//en la consola su tabla de multiplicar
function imprimirTabla(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
/** 
 * imprimirTabla(1);
 * 1 x 1 = 1
 * 1 x 2 = 2
 * 1 x 3 = 3
 * 1 x 4 = 4
 * 1 x 5 = 5
 * 1 x 6 = 6
 * 1 x 7 = 7
 * 1 x 8 = 8
 * 1 x 9 = 9
 * 1 x 10 = 10
 */
function suma(a,b) {
    let res = a + b;
    return res;
}
let resultado = suma(1,3);
console.log(resultado);

//Escribe una funcion que pase
//1 euro es 1,05USD