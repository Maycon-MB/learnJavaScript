// Exercícios

/* 
    - O nome de cada variável criada deve respeitar as regras de nomenclatura de variáveis.
    - Se uma variável não tiver seu valor alterado depois da inicialização, ela deve ser do tipo const.
    - Comece cada resolução imprimindo na tela o texto "Resultado do exercicio X", sendo X o número do exercício em questão.
*/

/*
1 - Faça uma função que recebe as notas das 3 provas de um aluno e calcule a média delas. 
Ao término do processo, devemos ter a mensagem "a média desse aluno é x" (sendo X o resultado do cálculo). 
*/

console.log("Resultado do exercício 1.");

function calcularMedia(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  console.log(`A média desse aluno é ${media}`);
}

calcularMedia(10, 5, 9);

/*
 2 - Imagine agora que o aluno do item anterior não atingiu a média mínima para passar, e por isso terá que fazer a prova final.
Faça uma nova função que calcula a média final desse aluno a partir de 4 notas, as das 3 primeiras provas + a nota da prova final. O calculo deve ser o seguinte:
media_final = (media_antes_da_pf + pf)/2 
*/

// Você deve usar a função do exercício 1 para calcular a média final. Faça as modificações que julgar necessário.
// Ao término do processo, devemos ter a mensagem "a média final desse aluno é X" (sendo x o resultado do cálculo).

console.log("Resultado do exercício 2.");
function calcularMediaNova(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  return media;
}

function calcularMediaFinal(nota1, nota2, nota3, pf) {
  const media_antes_da_pf = calcularMediaNova(nota1, nota2, nota3);
  const mediaFinal = (media_antes_da_pf + pf) / 2;
  console.log(`A média final desse aluno é ${mediaFinal}`);
}

calcularMediaFinal(4, 5, 7, 10);

// 3 - Escreva uma função que recebe do usuário um valor de temperatura em graus Celsius e escreve na tela o texto:
// a temperatura correspondente em Farenheit é de xºF(sendo x o resultado da conversão).
// Obs: temperatura em Farenheit = (9/5)*(temperatura em Celsius) + 32

console.log("Resultado do exercício 3.");
function recebeTemperatura(temperaturaCelsius) {
  const farenheit = (9 / 5) * temperaturaCelsius + 32;
  console.log(`A temperatura correspondente em Farenheit é: ${farenheit}ºF`);
}

recebeTemperatura(30);
