//Dividir el codigo en funciones




function pedirDatosUsuario(){
    console.log("Pidiendo datos al usuario...")
    autenticarUsuario("Papá Noel");
}

function autenticarUsuario(usuario) {
    console.log("Autenticando usuario...");
    console.log("Usuario " + usuario + " autenticado con éxito");
}