const a = 20;
const b = "20";
const c = 30;

console.log(a > c);
console.log(a < c);

console.log(a >= c);
console.log(a <= c);

//Comparación
//Un "=" asigna el valor de la derecha
//a la izquierda, NO compara

//No tiene en cuenta el tipo de dato
console.log(a == b); //20 == "20"

//Idualdad estricta

console.log(a === b);
//Revisa primero el tipo de dato
console.log(a === Number.parseInt(b));

//Desigualdad
console.log(a != b);
//Desigualdad estricta
console.log(a !== b);

//Operadores booleanos
// Y AND -> &&
// O OR -> ||
// Negacion !
let test = true && true;
test = 3 < 4 + 6 && 2 / 4 >= 2 - 1;
console.log("test ", test);
test = true || true; //true
test = true || false; //true
test = false || true; //true
test = false || false; //true

test = !test;//invierte el valor

console.log("test: ", test);
