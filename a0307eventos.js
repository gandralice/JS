// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links_int = document.querySelectorAll('a[href^= "#"]');

links_int.forEach((item, index) => {
  function linkC(event) {
    event.preventDefault();

    item.classList.add("ativo");

    for (let i = 0; i < links_int.length; i++) {
      if (i !== index) {
        links_int[i].classList.remove("ativo");
      }
    }
    console.log(item.classList, event);
  }

  item.addEventListener("click", linkC);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
/*const all_el = document.querySelectorAll("body *");

all_el.forEach((item) => {

  function click_el(event) {
    console.log(event.target);
  }

  item.addEventListener("click", click_el);
});*/

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const all_el = document.querySelectorAll("body *");

all_el.forEach((item) => {
  function click_el(event) {
    event.target.remove();
  }

  item.addEventListener("click", click_el);
});

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function resizeText(event) {
  if (event.key === "t") document.body.classList.toggle("aumText");
}
window.addEventListener("keydown", resizeText);
/* css:
.aumText {
  font-size: 200%;
}
*/
