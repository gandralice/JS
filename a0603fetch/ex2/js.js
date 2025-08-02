// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const resultDiv = document.querySelector("#result");

function bitcoinVal() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((data) => {
      const dataAtual = new Date();
      resultDiv.innerHTML =
        "Valor de compra bitcoin BRL: " +
        data.BRL.buy +
        " (Atualizado em: " +
        dataAtual +
        ").";
    })
    .catch(() => {
      resultDiv.innerHTML = "Ocorreu um erro ao consultar o valor.";
    });
}

bitcoinVal();

setInterval(() => {
  bitcoinVal();
}, 30000);
