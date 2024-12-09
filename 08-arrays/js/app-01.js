//Arrays literal
const numberList = [12, 34, 56, 79, 98];
const mix = [12, "hola", true, null];

//Constructor
const frutas = new Array("Manzanas", "Peras", "Naranja"); 

let x;
//Obtener el valor de un elemento del array
x = numberList[1 + 2];
x = numberList[1] + numberList[3];
x = `Mi fruta preferida es ${frutas[2]}`;
x = frutas.length;
frutas[0] = "fresa";
frutas[frutas.length] = "piña";
frutas[frutas.length] = "Cacahuetes";

frutas.unshift("Sandia");

console.log(frutas);
console.log(x);

const deportes = ["futbol", "padel", "baloncesto"];
deportes{deportes.length} = "golf";

const deportesFavoritos = deportes;

console.log("Lista de deportes", deportes)
console.log("Lista de deportes favoritos", deportesFavoritos);