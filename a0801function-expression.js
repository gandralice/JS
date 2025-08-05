// Remova o erro

const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// ou:
// console.log(priceNumber("R$ 99,99"));
// function priceNumber(n) {
//   return +n.replace("R$", "").replace(",", ".");
// }

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

let num = 3;

(function () {
  let num = 5;
  console.log(num);
})();

console.log(num);

// Como podemos utilizar
// a função abaixo.
const active = (callback) => callback();

active(function () {
  console.log("callback ativado");
});
