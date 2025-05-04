const prompt = require('prompt-sync')();

function exibirMenu() {
  console.log('\n1. Opção 1');
  console.log('2. Opção 2');
  console.log('3. Opção 3');
  const opcao = parseInt(prompt('Escolha uma opção: '));

  switch (opcao) {
    case 1:
      console.log('Você escolheu a Opção 1');
      break;
    case 2:
      console.log('Você escolheu a Opção 2');
      break;
    case 3:
      console.log('Você escolheu a Opção 3');
      break;
    default:
      console.log('Opção inválida!');
  }
}

exibirMenu()