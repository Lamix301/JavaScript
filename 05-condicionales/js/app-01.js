//Estructuras condicionales
let haceSol = true;

if(haceSol === true) {
    // console.log("Voy a la playa!");
} else {
    // console.log("Me quedo en casa");
}

haceSol = true;
let haceCalor = false;

if (haceSol && haceCalor) {
    // console.log("Voy a la playa!");
} else {
    // console.log("Me quedo en casa");
}

haceSol = true;
haceCalor = true;
tengoHambre = true;
if (haceSol) {
    console.log("Voy a la playa!");
} else if (tengoHambre) {
    console.log("Hago palomitas");
} else {
    console.log("No sé qué hacer...");
}

//Se pueden anidar
if (haceSol) {
    console.log("Voy a la playa!");
    if (tengoHambre) {
        console.log("Como un bocadillo");
    }
}
console.log("Fin del script");