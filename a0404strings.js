// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];

let somaTaxa = 0;
let somaRec = 0;

transacoes.forEach((item) => {
  const num = parseInt(item.valor.slice(3));

  if (item.descricao.includes("Taxa")) {
    somaTaxa += num;
  } else {
    somaRec += num;
  }
});

// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

const listaTransportes = transportes.split(";");

console.log(listaTransportes);

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

const html2 = html.replace(/["span"]+/g, "a");
console.log(html2);

// Retorne o último caracter da frase
const frase = "Melhor do ano!";

console.log(frase[frase.length - 1]);

// Retorne o total de taxas
const transacoess = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let result = 0;
const totalTaxas = function () {
  for (let i = 0; i < transacoess.length; i++) {
    const item = transacoess[i].toLocaleLowerCase();
    if (item.includes("taxa")) {
      result++;
    }
  }
  return result;
};
console.log(totalTaxas());
