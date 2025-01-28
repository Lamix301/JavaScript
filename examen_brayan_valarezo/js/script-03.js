const libros = [
    { titulo: "El nombre de la rosa", autor: "Umberto Eco", leido: true, imagen: "images/libro1.jpg" },

    { titulo: "El Señor de los Anillos", autor: "J.R.R. Tolkien", leido: false, imagen: "images/libro2.jpg" },

    { titulo: "El Ingenioso Hidalgo Don Quixote de la Mancha", autor: "Miguel de Cervantes", leido: true, imagen: "images/libro3.png" },

    { titulo: "El Camino", autor: "Miguel Delibes", leido: false, imagen: "images/libro4.jpg" },
];

// Seleccionar el contenedor principal
const listaLibros = document.getElementById("lista-libros");

// Crear elementos dinámicamente para cada libro
libros.forEach(libro => {
    // Crear un contenedor para cada libro
    const contenedorLibro = document.createElement("div");
    contenedorLibro.classList.add("libro");
    contenedorLibro.classList.add(libro.leido ? "leido" : "no-leido");

    // Crear y agregar la imagen
    const imagen = document.createElement("img");
    imagen.src = libro.imagen;
    imagen.alt = `Portada de ${libro.titulo}`;
    contenedorLibro.appendChild(imagen);

    // Crear un contenedor para la información del libro
    const infoLibro = document.createElement("div");

    // Título del libro
    const titulo = document.createElement("h3");
    titulo.textContent = libro.titulo;
    infoLibro.appendChild(titulo);

    // Autor del libro
    const autor = document.createElement("p");
    autor.textContent = `Autor: ${libro.autor}`;
    infoLibro.appendChild(autor);

    // Estado de lectura
    const estadoLectura = document.createElement("p");
    estadoLectura.textContent = libro.leido ? "Estado: Leído" : "Estado: No leído";
    infoLibro.appendChild(estadoLectura);

    // Añadir información al contenedor principal del libro
    contenedorLibro.appendChild(infoLibro);

    // Agregar el contenedor del libro al DOM
    listaLibros.appendChild(contenedorLibro);
});