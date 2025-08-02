// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const resultDiv = document.querySelector("#result");
const btn = document.querySelector("#btn");

function randowJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      resultDiv.innerHTML = data.value;
    })
    .catch(() => {
      resultDiv.innerHTML = "Ocorreu um erro ao consultar o valor.";
    });
}

btn.addEventListener("click", randowJoke);
