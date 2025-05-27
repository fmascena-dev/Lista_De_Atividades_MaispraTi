// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

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
      console.log('Mais alto!');
    } else {
      console.log('Mais baixo!');
    }
  }
}

jogoAdivinhacao();
