// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigoInput = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultadoLista = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
    const nombre = amigoInput.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarListaAmigos();
    amigoInput.value = "";
}

function actualizarListaAmigos() {
    listaAmigos.innerHTML = "";
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 participantes para el sorteo.");
        return;
    }

    const sorteo = generarSorteo(amigos);
    mostrarResultados(sorteo);
}

function generarSorteo(participantes) {
    const participantesMezclados = [...participantes].sort(() => Math.random() - 0.5);
    const sorteo = {};

    for (let i = 0; i < participantes.length; i++) {
        sorteo[participantes[i]] = participantesMezclados[(i + 1) % participantes.length];
    }

    return sorteo;
}

function mostrarResultados(sorteo) {
    resultadoLista.innerHTML = "";
    for (const persona in sorteo) {
        const li = document.createElement("li");
        li.textContent = `${persona} le regala a ${sorteo[persona]}`;
        resultadoLista.appendChild(li);
    }
}