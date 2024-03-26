// ** Estruturas Condicionais e de Repetição
const usuario = { nome: "Maycon", idade: 24, time: "Flamengo" };

const boasVindas1 = "Bem-vindo, torcedor Rubro-Negro!";
const boasVindas2 = "Bem-vindo, torcedor Tricolor!";
const boasVindas3 = "Bem-vindo, torcedor Vascaíno!";
const boasVindas4 = "Bem-vindo, torcedor Botafoguense!";
const boasVindasGeral = "Seja bem-vindo, torcedor!";

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

// * Switch Case
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
}

// * Operador Ternário
/*
usuario.time === "Flamengo"
  ? console.log(boasVindas1)
  : usuario.time === "Fluminense"
  ? console.log(boasVindas2)
  : usuario.time === "Vasco"
  ? console.log(boasVindas3)
  : usuario.time === "Botafogo"
  ? console.log(boasVindas4)
  : console.log(boasVindasGeral);
*/

const msgDeEscolha = "Clique no setor para qual deseja comprar seu ingresso!";
const msgFinal = "Divirta-se no Maracanã!!!";

console.log(msgDeEscolha);
console.log(msgFinal);
