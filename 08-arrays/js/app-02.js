//Metodos de arrays
let x;
const arr = [29,34,56,73,890,55];
//Añadir un elemento al final
arr.push(100, 20, 44);
arr.pop(); //Elimina el ultimo elemento
arr.unshift(2000);//Añade al principio
arr.shift();//Quita el primer elemento

//arr.reverse();
x = arr.includes(103);
x = arr.indexOf(34);
x = arr.toString();
x = arr.join(" ");
x = arr.slice(1, 4);
x = arr.splice(1, 4);
//x = arr;
//Podemos encadenar metodos dependiendo del valor devuelto
x = arr.slice(1, 4).reverse().toString().charAt(0)
console.log(x);
console.log(arr);