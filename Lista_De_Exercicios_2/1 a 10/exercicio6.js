// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();

let sorteado = Math.floor(Math.random() * 5) + 1;
let palpite = parseFloat(
  prompt('Qual será o número sorteado? Escolha de 1 a 5: '),
);

if (palpite === sorteado) {
  console.log('Parabéns, você acertou!');
} else {
  console.log(`Você errou! O número sorteado é ${sorteado}`);
}
