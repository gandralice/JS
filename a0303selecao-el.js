// Retorne no console todas as imagens do site
const all_img = document.querySelectorAll("img");
console.log(all_img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img_img = document.querySelectorAll('[src^="img/imagem"]');
console.log(img_img);

// Selecione todos os links internos (onde o href começa com #)
const select_url = document.querySelectorAll('[href^="#"]');
console.log(select_url);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiro_h2 = document.querySelector(".animais-desc h2");
console.log(primeiro_h2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos[--paragrafos.length]);
