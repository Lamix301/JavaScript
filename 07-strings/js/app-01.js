//Comillas dobles
let producto = "Monitor de '23' pulgadas";
producto = 'Monitor de "23" pulgadas'
//Escapar caracteres
producto = "Moni\\tor de \"23\" pul\ngad\tas";

//Saber la longitud de un string
console.log(producto.length);

//ECMASCRIPT 2015 -> let const ... template stings
producto= "Teclado USB";
const precio = "180€";
// let oferta = producto + ", tiene un precio de " + precio;
let oferta = `El producto ${producto},
tiene un precio de ${precio}
La suma de 1 + 2 es : ${1 + 2}`;
let p1 = "Tele";
let p2 = "Telefono";
let p3 = "Calculadora";
let nombre = "Flujencio";
let lista = `<h1>${nombre}</h1>
<ul>
<li>${p1}</li>
<li>${p2}</li>
<li>${p3}</li>
</ul>`
console.log(oferta);
document.write(lista)

//Métodos para strings

const saludo = "Hola caracola, que ase!";
//conocer su longitud
console.log(saludo.length);
console.log(saludo{0});
console.log(saludo{3});
console.log(saludo{saludo.length - 1});
let i = 0;
while(i < saludo.length) {
    //Imprimir mensaje al encontrar una a
    if (saludo{i} === "a") {
        console.log("He encontrado una a en la posición" + i);
    }
    i++;
}
saludo = "Hola caracola, que ase";
console.log(saludo.indexOf("paracola"));
console.log(saludo.includes("caracola"));
console.log(saludo.charAt(3));
console.log(saludo.charCodeAtt(3));

// console.log(saludo);
let userName = "     Mafalda     "
let userNameFiltered = userName.trim().toLocaleLowerCase;
// userNameFiltered = userNameFiltered.toLocaleLowerCase()