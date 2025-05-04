// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

const valor1 = parseFloat(prompt('Digite o primeiro valor: '));
const valor2 = parseFloat(prompt('Digite o segundo valor: '));

if (valor1 < valor2) {
  console.log(`${valor1}, ${valor2}`);
} else {
  console.log(`${valor2}, ${valor1}`);
}
