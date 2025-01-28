// URL del archivo JSON
const jsonURL = "json/libros.json";

// Seleccionar el contenedor principal
const listaLibros = document.getElementById("lista-libros");

// Cargar datos del JSON usando fetch
fetch(jsonURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al cargar el archivo JSON");
        }
        return response.json();
    })
    .then(libros => {
        // Limpiar el contenedor
        listaLibros.textContent = "";

        // Procesar los datos y mostrarlos en el DOM
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

             // Agregar el evento de clic para cambiar el estado de lectura
            contenedorLibro.addEventListener("click", () => {
            // Cambiar el estado de lectura
            libro.leido = !libro.leido;

             // Actualizar las clases y el texto de estado
               contenedorLibro.classList.toggle("leido", libro.leido);
               contenedorLibro.classList.toggle("no-leido", !libro.leido);
               estadoLectura.textContent = libro.leido ? "Estado: Leído" : "Estado: No leído";
            });

            // Agregar el contenedor del libro al DOM
            listaLibros.appendChild(contenedorLibro);
        });
    })
    .catch(error => {
        listaLibros.textContent = "Hubo un error al cargar los datos: " + error.message;
    });