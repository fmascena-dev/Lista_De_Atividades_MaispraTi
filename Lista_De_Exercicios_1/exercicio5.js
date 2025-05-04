// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')();

const peso = parseFloat(prompt('Digite o seu peso (kg): '));
const altura = parseFloat(prompt('Digite a sua altura (m): '));
let imc = peso / (altura * altura);
let categoria;

if (imc < 18.5) {
  categoria = 'Você está abaixo do peso';
} else if (imc < 25) {
  categoria = 'Você está com peso normal';
} else if (imc < 30) {
  categoria = 'Você está com sobrepeso';
} else {
  categoria = 'Você está com obesidade';
}

console.log(`IMC: ${imc.toFixed(2)}, ${categoria}`);
