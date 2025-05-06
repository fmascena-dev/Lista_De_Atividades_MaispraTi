// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

const velocidade = parseFloat(prompt('Qual a velocidade do caro (km/h)? '));

if (velocidade > 80) {
  let multa = (velocidade - 80) * 5;
  console.log(`Você foi multado! O valor da multa é: R$ ${multa.toFixed(2)}`);
} else {
  console.log('Você está dentro do limite de velocidade permitido!');
}
