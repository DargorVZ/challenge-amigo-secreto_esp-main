let amigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreAmigo);
        limpiarCampo();
    }
    mostrarAmigos();
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

function sortearAmigo(){
    if (amigos.length <= 0) {
        alert('No tienes amigos: Agrega alguno primero');
    } else {
        let amigoElegido = amigos[Math.floor(Math.random()*amigos.length)];
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = `El amigo secreto es: ${amigoElegido}`;
        lista.style.color = 'green';
    }
}