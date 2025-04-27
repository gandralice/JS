// Duplique o menu e adicione ele em copy
const copy = document.querySelector("footer");
const clone_menu = menu.cloneNode(true);
copy.appendChild(clone_menu);

// Selecione o primeiro DT da dl de Faq
const faq_lista = document.querySelector(".faq-lista");
const primeiroDT = faq_lista.querySelector("dt:first-child");

// Selecione o DD referente ao primeiro DT
const primeiroDD = primeiroDT.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const body = document.querySelector("body");
const sec_faq = document.querySelector(".faq");
const sec_animais = document.querySelector(".animais");
// body.replaceChild(sec_animais, sec_faq);  ou:
sec_faq.innerHTML = sec_animais.innerHTML;
