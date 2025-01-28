// 1. Cambiar el estilo del body para que la propiedad font-family sea "Arial, sans-serif"
document.body.style.fontFamily = "Arial, sans-serif";

// 2. Iterar sobre todos los elementos <li> y añadir la clase "color-list-item" a cada uno de ellos
const listItems = document.querySelectorAll("li");
listItems.forEach(item => {
    item.classList.add("color-list-item");
    item.style.color = "red";
});

// 3. Crear un elemento <img>, asignarle un atributo src, y añadirlo al documento HTML
const imgElement = document.createElement("img");

imgElement.src = "images/equipo-tridimensional.jpg"; 

imgElement.alt = "Equipo tridimensional";

document.body.appendChild(imgElement);
