// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:

// - Matrícula:
// - Nome:
// - Salário bruto:
// - Dedução INSS:
// - Salário líquido:
//(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).

const prompt = require('prompt-sync')();

let funcionarios = [];

for (let i = 0; i < 3; i++) {
  let matricula = prompt('Matrícula:');
  let nome = prompt('Nome:');
  let salarioBruto = parseFloat(prompt('Salário bruto:'));
  let deducao = salarioBruto * 0.12;
  let salarioLiquido = salarioBruto - deducao;

  funcionarios.push({
    matricula,
    nome,
    salarioBruto,
    deducao,
    salarioLiquido,
  });
}

console.log('---------------------------------------');
console.log('Folha de Pagamento:');
funcionarios.forEach((f) => {
  console.log(`Matrícula: ${f.matricula}`);
  console.log(`Nome: ${f.nome}`);
  console.log(`Salário bruto: R$ ${f.salarioBruto.toFixed(2)}`);
  console.log(`Dedução INSS: R$ ${f.deducao.toFixed(2)}`);
  console.log(`Salário líquido: R$ ${f.salarioLiquido.toFixed(2)}`);
  console.log('--------------------------------------');
});
