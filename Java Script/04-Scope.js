//Scope Global
var nombre = "Pablo"

function saludo(){
    console.log(`dentro de la funcion ${nombre}`);
    var apellido = "Paz"
    return 0;
}
console.log(saludo());
console.log(`Fuera de la funcion ${nombre}`);

//Scope Local
var nombre1 = "Miguel"
function saludo(){
    var apellido = "Amarro"
    console.log(`dentro la funcion ${apellido}`);
    return 0;
}
console.log(saludo());
console.log(`Fuera de la funcion ${apellido1}`);