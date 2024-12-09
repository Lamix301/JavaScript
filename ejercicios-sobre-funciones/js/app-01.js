// 1. Crea una función que reciba dos números y devuelva su suma
function suma(a,b) {
    return a + b;
}
alert(suma(8,9));

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function getMaxValue(numList) {
    let max = 0;
    for(let i = 0; i < numList.length;i++){
        if(numList[i] > max) {
            max = numList[i];
        }
    }
    return max;
}

const lista = [2, 5, 65, 34, 1];
let numMax = getMaxValue(lista);
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function cuentaVocales(frase) {
    let numVocales = 0;
const vocales = "aeiuoAEIOU";

for (let i = 0; i < frase.length; i++) {
    for (let j = 0; j < frase.length; j++) {
        if(frase{i} === vocales{j}){
            numVocales++;
            break;
        }
    }
}
return numVocales;
} 
console.log(cuentaVocales("calabaza"));

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function minusToMayus(lista){
    const mayus = [];
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        mayus.push(element.toUpperCase());
    }
    return mayus;
}
const deportes = ["futbol", "tenis", "padel"];
console.log(minusToMayus(deportes));//["FUTBOL", "TENIS", "PADEL"]
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function numCuadrado(listaNum) {
    const listaNumCuadrado = [];
    for (let i = 0; i < listaNum.length; i++) {
        const element = listaNum[i];
        const cuadrado = element + element;
        listaNumCuadrado.push(cuadrado);
    }
    return listaNumCuadrado;
}
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
//"Este fin de semana hay puente" -> ["este", "fin", "de", "semana", "hay", "puente"]
//Hay algun metodo de strings que convierta a array por un delimitador? ""
//Hay algun metodo de array que invierta en orden?
//Hay algun metodo a array que lo convierta a string usando un conector?

//"puente hay semana de fin este"
// 10. Crea una función que calcule el factorial de un número dado