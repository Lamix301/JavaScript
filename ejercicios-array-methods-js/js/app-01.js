// Ejercicio 1: Usa forEach para imprimir en la consola el nombre y la
// ciudad de cada persona
// Resultado esperado: Alice (Nueva York), Bob (Londres), Charlie
// (París), David (Tokio), Eve (Sídney)
// Ejercicio 2: Crea un nuevo array con objetos que contengan el nombre,
// la edad y la ciudad de cada persona
// Resultado esperado: [{ nombre: 'Alice', edad: 28, ciudad: 'Nueva
// York' }, ...]
const
// Ejercicio 3: Filtra las personas que tienen hobbies que incluyen
// 'lectura'
// Resultado esperado: [{ nombre: 'Alice', ... }]
// Ejercicio 4: Calcula la suma de las edades de todas las personas
// usando reduce
// Resultado esperado: 146
// Ejercicio 5: Comprueba si al menos una persona es menor de 21 años
// usando some
// Resultado esperado: true/false
const hayMenorDeEdad = personas.some((persona) => {
    return persona.edad < 21;
});
// Ejercicio 6: Encuentra la persona con la edad exacta de 29 años
// usando find
// Resultado esperado: { nombre: 'Eve', ... }
const persona29 = personas.find ((persona) => {
    return persona.edad === 29;
});
// Ejercicio 7: Ordena las personas por edad de forma descendente usando
// sort
// Resultado esperado: [{ nombre: 'Bob', edad: 35, ... }, ...]
const personasEdadDesc = personas.toSorted((a, b) => {
    return b.edad - a.edad;
})