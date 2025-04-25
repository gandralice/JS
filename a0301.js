// Retorne o url da página atual utilizando o objeto window
const url_pag = window.Location.href;
console.log(url_pag);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const el_ativo = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const lang_pag = window.navigator.language;
console.log(lang_pag);

// Retorne a largura da janela
console.log(window.innerWidth);
