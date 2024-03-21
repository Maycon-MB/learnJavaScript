// ** Object **
/* Os objetos em JavaScript são coleções de pares de chave-valor, onde as chaves são strings (ou símbolos)
 e os valores podem ser de qualquer tipo de dado, incluindo outros objetos.  */

const documentoIdentidade = {
  nome: "Maycon",
  sobrenome: "Bruno",
  cpf: "123.456.789-00",
  empresa: "SMRE",
  Idade: 24,
};

console.log(documentoIdentidade);

// ** Array **
/* Os arrays em JavaScript são objetos especiais que armazenam uma coleção de elementos, 
  onde cada elemento pode ser de qualquer tipo de dado, incluindo outros arrays e objetos. */

const investimentoMensal = [1000, 2000, 3000, 2000, 1500, 1200, 1300];

//console.log(investimentoMensal);
console.log(`O valor investido no mês de janeiro é: ${investimentoMensal[0]}`);
console.log(
  `O valor investido no mês de fevereiro é: ${investimentoMensal[1]}`
);

// ** Nomenclatura e Mutabilidade **

let musica = {
  nome: "Let it Be",
  artista: "Beatles",
  album: "Let it Be",
};

let listaDeBandas = ["Beatles", "Rolling Stones", "Led Zeppelin"];

console.log(listaDeBandas[3]);

listaDeBandas[4] = "Linkin Park";
console.log(listaDeBandas[4]);

musica.album = "Past Masters";
musica.ano = 1969;
console.log(musica);

// ** Manipulação de referências

const cartao1 = {
  nome: "Maycon",
  saldo: 950000,
};

const cartao2 = cartao1;

console.log(cartao1);
console.log(cartao2);

cartao1.saldo -= 50000;

console.log(cartao1);
console.log(cartao2);

const listaAlunos = ["Maycon", "Joao", "Maria"];
listaAlunos[3] = "Pedro";

console.log(listaAlunos);

// ** Funções **

function pegarComanda() {
  console.log("Olá, bom dia!");
  console.log("Pegue aqui a sua comanda!");
  console.log("Bom apetite!");
  console.log("----------------------------");
}

pegarComanda();
pegarComanda();
pegarComanda();

function calcularQuadrado(numeroDaVez) {
  console.log(`O número da vez é o ${numeroDaVez}`);
  console.log(
    `O número da vez (${numeroDaVez}), ao quadrado vale ${numeroDaVez ** 2}`
  );
}

calcularQuadrado(1);
calcularQuadrado(5);
calcularQuadrado(10);

function resolverBhaskara(a, b, c) {
  const delta = b ** 2 - 4 * a * c;
  const x1 = ((-b + calcularRaizQuadrada(delta)) / 2) * a;
  const x2 = ((-b - calcularRaizQuadrada(delta)) / 2) * a;

  console.log(`Os dois valores de X dos pontos da parábola são ${x1} e ${x2}`);
}

function calcularRaizQuadrada(base) {
  return base ** (1 / 2);
}

let valorRaizQuadrada = calcularRaizQuadrada(36);

console.log(valorRaizQuadrada);

// Escopo
const primeiraVariavel = "Texto inicial";

function printToConsole() {
  const primeiraVariavel = "Segundo texto";
  function secondFunction() {
    const primeiraVariavel = "Terceiro";
    console.log(primeiraVariavel);
  }
  console.log(primeiraVariavel);
  secondFunction();
}

printToConsole();

// ** Métodos **
let casa = {
  cor: "red",
  sala: 15,
  cozinha: 10,
  banheiro: 8,
  quarto: 8,
  calcularTamanho: function () {
    const tamanhoTotal = this.sala + this.cozinha + this.banheiro + this.quarto;
    console.log(`O tamanho da casa é de ${tamanhoTotal}m².`);
    return tamanhoTotal;
  },
};

casa.calcularTamanho();
