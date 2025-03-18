// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadoAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        limpiarCampo();
    } else {
        listadoAmigos.push(nombreAmigo);
        limpiarCampo();
    }
    
    console.log(listadoAmigos);

}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}