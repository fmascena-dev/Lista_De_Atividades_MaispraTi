//1. Validação de Datas

//Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano) {
  if (
    !Number.isInteger(dia) ||
    !Number.isInteger(mes) ||
    !Number.isInteger(ano)
  )
    return false;
  if (mes < 1 || mes > 12 || dia < 1 || ano < 1) return false;

  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    diasPorMes[1] = 29;
  }

  return dia <= diasPorMes[mes - 1];
}

console.log('--- Testes de Validação de Datas ---');

// Datas válidas
console.log(`01/01/2023 é válida? ${ehDataValida(1, 1, 2023)}`);
console.log(`31/12/2024 é válida? ${ehDataValida(31, 12, 2024)}`);
console.log(`29/02/2024 (bissexto) é válida? ${ehDataValida(29, 2, 2024)}`);
console.log(`29/02/2000 (bissexto) é válida? ${ehDataValida(29, 2, 2000)}`);
console.log(`15/06/1990 é válida? ${ehDataValida(15, 6, 1990)}`);

// Datas inválidas
console.log(`32/01/2023 é válida? ${ehDataValida(32, 1, 2023)}`);
console.log(`01/13/2023 é válida? ${ehDataValida(1, 13, 2023)}`);
console.log(`29/02/2023 (não bissexto) é válida? ${ehDataValida(29, 2, 2023)}`); // 2023 não é ano bissexto
console.log(`31/04/2023 é válida? ${ehDataValida(31, 4, 2023)}`);
console.log(`-5/05/2020 é válida? ${ehDataValida(-5, 5, 2020)}`);
console.log(`10/00/2020 é válida? ${ehDataValida(10, 0, 2020)}`);
console.log(`10/05/-2020 é válida? ${ehDataValida(10, 5, -2020)}`);
console.log(`30/02/2024 é válida? ${ehDataValida(30, 2, 2024)}`); // Fevereiro não tem 30 dias
