// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");

const arrayCursos = Array.from(cursos);

const objCursos = arrayCursos.map((item) => {
  const title = item.querySelector("h1").innerHTML;
  const desc = item.querySelector("p").innerHTML;
  const aulas = item.querySelector(".aulas").innerHTML;
  const horas = item.querySelector(".horas").innerHTML;
  return {
    title: title,
    desc: desc,
    aulas: aulas,
    horas: horas,
  };
});

console.log(objCursos);

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

const maior100 = numeros.filter((num) => num > 100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

const hasBaixo = instrumentos.some((item) => item == "Baixo");

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

// let resultado = 0;

// const total = compras.map((item) => {
//   const valCompra = +item.preco.slice(3).replace(",", ".");
//   resultado += valCompra;
//   return resultado;
// });

const total = compras.reduce((acumulador, item) => {
  const valCompra = +item.preco.slice(3).replace(",", ".");
  return acumulador + valCompra;
}, 0);
