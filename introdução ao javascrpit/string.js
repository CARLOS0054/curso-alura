// para declarar uma variável do tipo string, precisa-se de aspas simples ou duplas
let string = "olá mundo ";
// inclusive podendo colocar numeros dentro das strings
let string1 = "09 era um bom soldado";

// com base nos conhecimentos de string, podemos tbm concatenar strings... junta-las para ultilizar da melhor forma
// podemos concatenar usando o sinal matematico de + 

 let msg0 = "olá mundo,";
 let msg1 = " iremos aprender bastante por aqui!";

// // como podemos ver temos duas strings, para concatenar,fazemos o seguinte:

 let concatenar = msg0+msg1;
// // assim juntamos as duas mensagens dentro de uma variavel string, mas como veremos isso?
// // para vizualizar essa concatenação fazemos o seguinte, usando o console.log:

  console.log (concatenar);
// Quando abrimos o devtols estará la as duas mensagens.
// podemos juntar também as variaveis e concatenar com textos como por exemplo:]

// --- let pessoa= "carlos, ";
//  ---let msg3= pessoa + "olá seja bem-vindo";

//  ---console.log (msg3);
// esse é o modo antigo, mas iremos apredner da maneira mais moderna
let pessoa= "carlos, ";
let msg3= `${pessoa} olá seja bem vindo poh, tmj mlk`;

// exercícios
// prompt é uma tag que abre um popup na tela para o usuário colocar o nome ou alguma informação
let usuário = prompt ("qual é o seu nome porra?");
alert(`${usuário}, vc é gay!`);