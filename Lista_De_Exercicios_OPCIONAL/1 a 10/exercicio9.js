// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

const prompt = require('prompt-sync')();

let totalHomens = 0;
let totalMulheres = 0;
let continuar;

do {
  let salario = parseFloat(prompt('Salário: '));
  let sexo = prompt('Sexo (M/F): ').toUpperCase();

  if (sexo === 'M') totalHomens += salario;
  else if (sexo === 'F') totalMulheres += salario;

  continuar = prompt('Deseja continuar? (S/N): ').toUpperCase();
} while (continuar === 'S');

console.log(`Total pago aos homens: R$ ${totalHomens.toFixed(2)}`);
console.log(`Total pago às mulheres: R$ ${totalMulheres.toFixed(2)}`);
