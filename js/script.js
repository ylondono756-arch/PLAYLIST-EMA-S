const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

const btnAnterior = document.getElementById("anterior");
const btnPlay = document.getElementById("playPause");
const btnSiguiente = document.getElementById("siguiente");

const tituloCancion = document.getElementById("tituloCancion");
const progreso = document.getElementById("progreso");
const tiempoActual = document.getElementById("tiempoActual");
const duracion = document.getElementById("duracion");
const volumen = document.getElementById("volumen");

let indiceActual = 0;
let listaLi = [];

function formatearTiempo(segundos) {
    if (isNaN(segundos)) return "0:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? "0" : ""}${seg}`;
}

function cargarCancion(indice) {
    indiceActual = indice;

    audio.src = "canciones/" + canciones[indice];

    tituloCancion.textContent = canciones[indice].replace(/\.(mp3|wma|wmv)$/i, "");

    listaLi.forEach(li => li.classList.remove("activa"));
    listaLi[indice].classList.add("activa");
}

function reproducir(indice) {
    cargarCancion(indice);
    audio.play();
    btnPlay.textContent = "⏸";
}

canciones.forEach((nombre, index) => {

    const li = document.createElement("li");

    li.textContent = nombre.replace(/\.(mp3|wma|wmv)$/i, "");

    li.addEventListener("click", () => {
        reproducir(index);
    });

    playlist.appendChild(li);

    listaLi.push(li);

});

btnPlay.addEventListener("click", () => {

    if (!audio.src) {
        reproducir(0);
        return;
    }

    if (audio.paused) {
        audio.play();
        btnPlay.textContent = "⏸";
    } else {
        audio.pause();
        btnPlay.textContent = "▶";
    }

});

btnSiguiente.addEventListener("click", () => {

    indiceActual++;

    if (indiceActual >= canciones.length) indiceActual = 0;

    reproducir(indiceActual);

});

btnAnterior.addEventListener("click", () => {

    indiceActual--;

    if (indiceActual < 0) indiceActual = canciones.length - 1;

    reproducir(indiceActual);

});

audio.addEventListener("timeupdate", () => {

    progreso.max = audio.duration || 0;

    progreso.value = audio.currentTime;

    tiempoActual.textContent = formatearTiempo(audio.currentTime);

    duracion.textContent = formatearTiempo(audio.duration);

});

progreso.addEventListener("input", () => {

    audio.currentTime = progreso.value;

});

volumen.addEventListener("input", () => {

    audio.volume = volumen.value / 100;

});

audio.addEventListener("ended", () => {

    indiceActual++;

    if (indiceActual >= canciones.length) indiceActual = 0;

    reproducir(indiceActual);

});