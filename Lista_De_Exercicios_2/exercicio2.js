const prompt = require('prompt-sync')();

function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let tentativas = 0;
  let palpite;

  while (true) {
    palpite = parseInt(prompt('Adivinhe o número de 1 a 100: '));
    tentativas++;

    if (isNaN(palpite)) {
      console.log('Por favor, digite um número válido!');
      continue;
    }

    if (palpite === numeroSecreto) {
      console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
      break;
    } else if (palpite < numeroSecreto) {
      console.log('O número é maior!');
    } else {
      console.log('O número é menor!');
    }
  }
}

jogoAdivinhacao();
