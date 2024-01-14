var mensajesSecretos = [
    "Eres mi sol y mi luna.",
    "Cada día contigo es un regalo.",
    "Tu amor ilumina mi vida.",
    "Eres mi sueño hecho realidad."
];

function mostrarMensajeSecreto() {
    console.log("Clic en el botón");
    var mensajeSecreto = document.getElementById('mensajeSecreto');
    var mensajeAleatorio = mensajesSecretos[Math.floor(Math.random() * mensajesSecretos.length)];
    mensajeSecreto.innerText = mensajeAleatorio;
    mensajeSecreto.classList.toggle('oculto');

    var boton = document.querySelector('button');
    boton.classList.add('animated');

    var corazonSecreto = document.getElementById('corazon-secreto');
    corazonSecreto.classList.add('heartBeat');

    boton.style.backgroundColor = getRandomColor();

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}