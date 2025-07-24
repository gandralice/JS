// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce

const paragrafos = document.querySelectorAll("p");
const totalCaracteres = Array.from(paragrafos).reduce((acumulador, item) => {
  return acumulador + item.innerText.length;
}, 0);

console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

const newHtmlElement = (tag, classe, conteudo) => {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  elemento.innerHTML = conteudo;
  return document.body.appendChild(elemento);
};

const h1 = newHtmlElement("h1", "titulo", "Esse é o título");

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const newH1 = newHtmlElement.bind(null, "h1", "titulo");

newH1("lorem");
