// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        limpiarCampo();
    } else {
        amigos.push(nombreAmigo);
        limpiarCampo();
    }
    mostrarAmigos();
    console.log(amigos);
}

function mostrarAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = amigos[i];
        lista.appendChild(li);
    }
}

function limpiarCampo() {
    document.querySelector('#amigo').value = '';
}