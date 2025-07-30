// Mude a cor da tela para azul e depois para vermelho a cada 2s.

const corpo = document.body;
setInterval(() => {
  if (corpo.style.backgroundColor == "red") {
    corpo.style.backgroundColor = "blue";
  } else {
    corpo.style.backgroundColor = "red";
  }
}, 2000);

// Crie um cronometro utilizando o setInterval.

const btn_iniciar = document.querySelector("#iniciar");
const btn_pausa = document.querySelector("#pausa");
const btn_finalizar = document.querySelector("#finalizar");
const tempo_display = document.querySelector("#tempo");

let cronometro;
let i = 0;

function callback() {
  tempo_display.innerHTML = i++;
}
function iniciar_cronometro() {
  cronometro = setInterval(callback, 1000);
}
function pausa_cronometro() {
  clearInterval(cronometro);
}
function finalizar_cronometro() {
  clearInterval(cronometro);
  i = 0;
}

btn_iniciar.addEventListener("click", iniciar_cronometro);
btn_pausa.addEventListener("dblclick", pausa_cronometro);
btn_finalizar.addEventListener("click", finalizar_cronometro);
