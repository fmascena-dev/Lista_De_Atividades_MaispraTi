// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os valores da sequência.

const prompt = require('prompt-sync')();

const primeiro = parseFloat(prompt('Primeiro termo da PA: '));
const razao = parseFloat(prompt('Razão da PA: '));
let soma = 0;

console.log('Os 10 primeiros termos da PA: ');
for (let i = 0; i < 10; i++) {
  let termo = primeiro + i * razao;
  console.log(termo);
  soma += termo;
}

console.log(`Soma dos termos é: ${soma}`);
