// Alguns dos tipos de dados em JavaScript

// ** String **
// Podem ser em aspas simples (''), aspas duplas ("") ou crase (``).
// O formato com crase é uma "string template", ou seja, uma string que permite expressões embutidas entre si, por exemplo:

const texto1 = "Uma string normal."; //Pode ser usado com aspas simples também

const numeroExemplo = 102030;
const stringTemplate = `O número que decidi registrar foi o ${numeroExemplo}`;

console.log(stringTemplate);
//Irá exibir: O número que decidi registrar foi o 102030

// ** Number **
// É o tipo de dado que representa informações numéricas. Sejam números inteiros positivos e negativos (-3, 0, 1, 5, ...)
// ou números decimais (23.572, todos são entendidos como "Number", por exemplo:

const numero1 = 27;
const numero2 = 23.35;
const numero3 = -40;
const total = numero1 + numero2 + numero3;

console.log(total);
// Irá exibir: 10.35

// ** Boolean **
// Os valores desse tipo de dado são true e false. Exemplo:

const valor1 = false;
const valor2 = true;

// ** Operadores booleanos **
// Variáveis booleanas tem seu próprio conjunto de operações. Que são:

// &&   AND(operação e) Usamos quando desejamos que duas condições sejam simultaneamente verdadeiras
// ||   OR(operação ou) Usamos quando desejamos que pelo menos uma das condições seja verdadeira
//  !   NOT(inversor)   Esse é um operador aplicado a um valor booleano quando queremos o seu inverso

const valor1_valor2 = valor1 && valor2;
const valor1_OuValor2 = valor1 || valor2;
const inversoValor1 = !valor1;
const inversoValor2 = !valor2;

console.log(valor1_valor2);
// false

console.log(valor1_OuValor2);
// true

console.log(inversoValor1);
// false

console.log(inversoValor2);
// true

// ** Object **
/* 
Os objetos em JavaScript são coleções de pares de chave-valor, onde as chaves são strings (ou símbolos)
e os valores podem ser de qualquer tipo de dado, incluindo outros objetos.
*/

const documentoIdentidade = {
  nome: "Maycon",
  sobrenome: "Bruno",
  cpf: "123.456.789-00",
  empresa: "SMRE",
  Idade: 24,
};

console.log(documentoIdentidade);

// ** Array **
/* 
Os arrays em JavaScript são objetos especiais que armazenam uma coleção de elementos, 
onde cada elemento pode ser de qualquer tipo de dado, incluindo outros arrays e objetos. 
*/

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

const listaNotas = [
  { nome: "Maycon", nota: 20 },
  { nome: "Pedro", nota: 15 },
  { nome: "Lucas", nota: 12 },
  { nome: "Fabricio", nota: 16 },
  { nome: "Isabelle", nota: 18 },
  { nome: "Nathalia", nota: 20 },
  { nome: "Amanda", nota: 20 },
  { nome: "João", nota: 20 },
  { nome: "Marcus", nota: 12 },
  { nome: "Sergio", nota: 13 },
  { nome: "Diego", nota: 14 },
  { nome: "Renan", nota: 11 },
  { nome: "Rodrigo", nota: 19 },
  { nome: "Messi", nota: 0 },
  { nome: "CR7", nota: 0 },
];

//  Filter -  Método responsável por gerar um novo array resultado de um filtro estabelecido pelo programador
const alunosAprovados = listaNotas.filter(function (aluno) {
  return aluno.nota >= 12;
});

console.log(alunosAprovados);

//  Find

const alunosComZero = listaNotas.find(function (aluno) {
  return aluno.nota === 0;
});

console.log(alunosComZero);

//  Map

const listaNomes = alunosAprovados.map(function (aluno) {
  return aluno.nome;
});

console.log(listaNomes);

function calculateSquareRoot(radicand) {
  return radicand ** (1 / 2);
}

function calculatePythagoras(side1, side2) {
  const sum = side1 ** 2 + side2 ** 2;
  return calculateSquareRoot(sum);
}

console.log(
  `A hipotenusa de um triângulo de lados 3 e 4 é: ${calculatePythagoras(3, 4)}`
);

// ** Estruturas Condicionais e de Repetição
const usuario = { nome: "Maycon", idade: 24, time: "Flamengo" };

const boasVindas1 = "Bem-vindo, torcedor Rubro-Negro!";
const boasVindas2 = "Bem-vindo, torcedor Tricolor!";
const boasVindas3 = "Bem-vindo, torcedor Vascaíno!";
const boasVindas4 = "Bem-vindo, torcedor Botafoguense!";
const boasVindasGeral = "Seja bem-vindo, torcedor!";
const msgDeEscolha = "Clique no setor para qual deseja comprar seu ingresso!";
const msgFinal = "Divirta-se no Maracanã!!!";

let numeroRepeticoes = 0;

// * If e Else
/* 
if (usuario.time === "Flamengo") {
  console.log(boasVindas1);
} else if (usuario.time === "Fluminense") {
  console.log(boasVindas2);
} else if (usuario.time === "Vasco") {
  console.log(boasVindas3);
} else if (usuario.time === "Botafogo") {
  console.log(boasVindas4);
} else {
  console.log(boasVindasGeral);
}
*/

// * Switch Case (com do while para exemplo)
do {
  switch (usuario.time) {
    case "Flamengo":
      console.log(boasVindas1);
      break;
    case "Fluminense":
      console.log(boasVindas2);
      break;
    case "Vasco":
      console.log(boasVindas3);
      break;
    case "Botafogo":
      console.log(boasVindas4);
      break;
    default:
      console.log(boasVindasGeral);

      console.log(msgDeEscolha);
      console.log(msgFinal);
  }
  numeroRepeticoes++;
} while (numeroRepeticoes < 10);

// * Operador Ternário
// do {
//   usuario.time === "Flamengo"
//     ? console.log(boasVindas1)
//     : usuario.time === "Fluminense"
//     ? console.log(boasVindas2)
//     : usuario.time === "Vasco"
//     ? console.log(boasVindas3)
//     : usuario.time === "Botafogo"
//     ? console.log(boasVindas4)
//     : console.log(boasVindasGeral);

//   console.log(msgDeEscolha);
//   console.log(msgFinal);

//   numeroRepeticoes++;
// } while (numeroRepeticoes < 10);

console.log("Ingressos Esgotados");
