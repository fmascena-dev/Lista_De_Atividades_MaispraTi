// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')();

let funcionario = {
  nome: prompt('Nome do funcionário: '),
  cargo: prompt('Cargo do funcionário: '),
  salario: parseFloat(prompt('Salário do funcionário: ')),
};

console.log('Registro do Funcionário:');
console.log(funcionario);
