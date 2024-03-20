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
