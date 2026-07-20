const canciones = [
"01 CAMINO DE EMAÚS.mp3",
"02 ALABANZA ESPIRITU SANTO.mp3",
"03 AMIGOS DE VERDAD DE REY RUIZ.mp3",
"04 Alianza de Amor - Hermana Glenda.mp3",
"05  ME HAS LLAMADO SEÑOR.mp3",
"06 DEIA QUE EL PADRE SEA EL JARDINERO.mp3",
"07 NADIE TE AMA COMO YO.mp3",
"08 ALMA MISIONERA.mp3",
"09 LE HE PRESTADO MI MANO A JESUS.mp3",
"10 PESCADOR DE HOMBRES.mp3",
"11 ORACIÓN JESUS I CAPILLA.mp3",
"12 ESTOY A LA PUERTA Y LLAMO.mp3",
"13 LLEVATE MI TRISTEZA.mp3",
"14 ESTE ES TU DÍA. Ministerio Musica Emaus SFJ.mp3",
"15 POR QUE ME SIGUES AMANDO.mp3",
"16 ME SEDUJISTE.mp3",
"17 TU MI ALFARERO.mp3",
"18 ME LEVANTARE.mp3",
"19 LA FAMILIA.mp3",
"20 SIERVO POR AMOR.mp3",
"21 POPURRI EMAUS.mp3",
"22 SI CONOCIERAS COMO TE AMO - Hna.mp3",
"23 PIDE Y SE TE DARA (1).mp3",
"24 Al Final Video Oficial Lilly Goodman.mp3",
"25.mp3",
"26 El Ciego de Jerico by Jorge Rivera.mp3",
"27.mp3",
"28 Mira lo que ha hizo en mi Jesús Emaus NY Band.mp3",
"29 No hay lugar mas alto Miel San Marcos feat christine d clario con letra.mp3"
];

const audio = document.getElementById("audio");
const playlist = document.getElementById("playlist");

canciones.forEach((nombre, index) => {

    const li = document.createElement("li");

    li.textContent = nombre.replace(/\.(mp3|wma|wmv)$/i,"");

    li.addEventListener("click", () => {

        audio.src = "canciones/" + nombre;

        audio.play();

        document.querySelectorAll("#playlist li").forEach(x=>x.classList.remove("activa"));

        li.classList.add("activa");

    });

    playlist.appendChild(li);

});