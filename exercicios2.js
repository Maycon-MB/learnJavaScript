// Exercícios

/* 
    - O nome de cada variável criada deve respeitar as regras de nomenclatura de variáveis.
    - Se uma variável não tiver seu valor alterado depois da inicialização, ela deve ser do tipo const.
    - Comece cada resolução imprimindo na tela o texto "Resultado do exercicio X", sendo X o número do exercício em questão.
*/

// 1 - Escreva um programa executando os seguintes passos:

// - Crie uma variável com o valor inicial igual a uma lista de número de 1 a 5. Esse valor não deve ser alterado.
console.log("Resultado do exercício 1.");
const lista = [1, 2, 3, 4, 5];

// - Imprima na tela: A primeira variável.

console.log(lista);
console.log(lista[0]);

/* - Imprima na tela a seguinte mensagem: "O valor do elemento X da minha lista é $valor", substituindo o termo iniciado em $ pelo valor abrigado na sua variável. 
X é a posição do elemento na lista. */

console.log(`O valor do elemento 0 da minha lista é: ${lista[0]}.`);
console.log(`O valor do elemento 1 da minha lista é: ${lista[1]}.`);
console.log(`O valor do elemento 2 da minha lista é: ${lista[2]}.`);
console.log(`O valor do elemento 3 da minha lista é: ${lista[3]}.`);
console.log(`O valor do elemento 4 da minha lista é: ${lista[4]}.`);

// 2 - Escreva um programa executando os seguintes passos:

// - Crie uma variável com valor inicial de um objeto que represente um pokémon (nome, estamina, defesa, habilidade).
console.log("Resultado do exercício 2.");

let pokemon = {
  nome: "Charizard",
  estamina: 90,
  ataque: 100,
  defesa: 50,
  habilidade: "Fire Blast",
};

// - Imprima na tela os textos "Meu objeto pokémon possui $chave e $valor", substituindo os termos pelos valores correspondentes ao conjunto chave/valor.

console.log(`Meu objeto pokémon possui nome: ${pokemon.nome}. `);
console.log(`Meu objeto pokémon possui estamina: ${pokemon.estamina}. `);
console.log(`Meu objeto pokémon possui ataque: ${pokemon.ataque}. `);
console.log(`Meu objeto pokémon possui defesa: ${pokemon.defesa}. `);
console.log(`Meu objeto pokémon possui habilidade: ${pokemon.habilidade}. `);

// 3 - Crie duas variáveis do tipo Number de valores iniciais distintos. Imprima na tela o resultado das operações aritméticas entre elas (+, -, /, *).
console.log("Resultado do exercício 3.");

let numberA = 100;
let numberB = 80;

const sum = numberA + numberB;
const sub = numberA - numberB;
const div = numberA / numberB;
const mul = numberA * numberB;

console.log(`A soma dos dois valores é ${sum}.`);
console.log(`A subtração dos dois valores é ${sub}.`);
console.log(`A divisão dos dois valores é ${div}.`);
console.log(`A multiplicação dos dois valores é ${mul}.`);

// 4 - Depois disso, Imprima na tela o resultado das operações de comparação maior que(>), menor que(<) e igual(===) para as duas variáveis.
console.log("Resultado do exercício 4.");

numberA = 500;
numberB = 250;

console.log(numberA > numberB);
console.log(numberB > numberA);

console.log(numberA < numberB);
console.log(numberB < numberA);

console.log(numberA === numberB);
