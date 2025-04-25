// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeira_img = document.querySelector("img");
const rect_img = primeira_img.getBoundingClientRect();
console.log(rect_img.top);

// Retorne a soma da largura de todas as imagens
let largura_imgs = 0;
function soma_largura(largT) {
  all_img.forEach((item) => {
    const largura = item.getBoundingClientRect().width;
    largT += largura;
  });
  console.log(largT);
}
soma_largura(largura_imgs);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const min = 48;
itensMenu.forEach((item) => {
  if (
    item.getBoundingClientRect().height < min ||
    item.getBoundingClientRect().width < min
  ) {
    console.log(item, "abaixo do recomendado");
  } else {
    console.log(item, "tam ideal");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector("nav");
const b_width = window.innerWidth;
if (b_width < 720) {
  menu.classList.add("menu-mobile");
  console.log(menu, menu.classList);
}
