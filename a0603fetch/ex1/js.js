// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const form = document.querySelector("form");
const cepInput = form.cep;
const resultDiv = document.querySelector("#result");

function handleSearch(event) {
  event.preventDefault();
  const cep = cepInput.value;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      resultDiv.innerHTML = `
          <p><strong>CEP:</strong> ${data.cep}</p>
          <p><strong>Logradouro:</strong> ${data.logradouro}</p>
          <p><strong>Bairro:</strong> ${data.bairro}</p>
          <p><strong>Cidade:</strong> ${data.localidade}</p>
          <p><strong>Estado:</strong> ${data.uf}</p>
        `;
    })
    .catch(() => {
      resultDiv.innerHTML = "Ocorreu um erro na busca pelo CEP.";
    });
}

form.addEventListener("submit", handleSearch);
