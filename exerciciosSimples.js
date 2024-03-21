// ** Exercícios **

/* 
    - O nome de cada variável criada deve respeitar as regras de nomenclatura de variáveis.
    - Se uma variável não tiver seu valor alterado depois da inicialização, ela deve ser do tipo const.
    - Comece cada resolução imprimindo na tela o texto "Resultado do exercicio X", sendo X o número do exercício em questão.
*/

// 1 - Escreva um programa executando os seguintes passos:
console.log("Resultado do exercício 1");

// - Crie uma variável com o valor inicial igual a 2148. Esse valor não deve ser alterado.
const valor1 = 2148;

// - Crie uma segunda variável, dessa vez sem um valor inicial.
let valor2;

// - Imprima na tela a seguinte mensagem: "O valor da primeira variável é $valor",
// substituindo o termo iniciado em $ pelo valor abrigado na sua variável
console.log(`O valor da primeira variável é ${valor1}.`);

// - Atribua um valor numérico a segunda variável.
valor2 = 1000;

// - Imprima na tela os textos "Minha segunda variável vale $valor" e "o valor da soma das minhas duas variáveis é $valor",
// substituindo o termo $valor pelos valores correspondentes.
console.log(`Minha segunda variável vale ${valor2}.`);

const soma = valor1 + valor2;
console.log(`O valor da soma das minhas duas variáveis é ${soma}.`);

// - Eleve a sua segunda variável ao quadrado e imprima na tela. Após isso, divida esse resultado por 3 e coloque-o na tela novamente
valor2 = valor2 ** 2;
console.log(valor2);
console.log(valor2 / 3);

// 2 - Crie duas variáveis booleanas de valores iniciais distintos. Imprima na tela o resultado das operações AND e OR entre elas.
console.log("Resultado do exercício 2");
const valorBool1 = true;
const valorBool2 = false;

console.log(valorBool1 && valorBool2);
console.log(valorBool1 || valorBool2);

// Depois disso, crie uma terceira variável booleana, com o valor de sua escolha.
const valorBool3 = true;

// Imprima na tela o resultado das operações AND e OR para as três variáveis disponíveis.
console.log(valorBool1 && valorBool2 && valorBool3);

console.log(valorBool1 || valorBool2 || valorBool3);
