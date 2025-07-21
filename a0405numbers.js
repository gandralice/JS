// Retorne um número aleatório
// entre 1050 e 2000

const numAl = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);
console.log(numAl);

// Retorne o maior número da lista abaixo

const numeros = "4, 5, 20, 8, 9";

const listaString = numeros.split(", ");
const listaNum = listaString.map(Number);
console.log(Math.max(...listaNum));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];

function calcSoma(precos) {
  let total = 0;

  for (const preco of precos) {
    const precoLimpo = preco
      .trim()
      .toLowerCase()
      .replace("r$", "")
      .replace(",", ".");

    let numero = +precoLimpo;

    if (numero) {
      total += numero;
    }
  }
  return Math.round(total * 100) / 100;
}
console.log(calcSoma(listaPrecos));
