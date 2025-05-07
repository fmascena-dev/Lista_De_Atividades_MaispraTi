// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')();

function horarioValido(h, m, s) {
  return h >= 0 && h < 24 && m >= 0 && m < 60 && s >= 0 && s < 60;
}

for (let i = 0; i < 5; i++) {
  let h, m, s;
  do {
    h = parseFloat(prompt(`Digite a hora ${i + 1} (0-23): `));
    m = parseFloat(prompt(`Digite a hora ${i + 1} (0-59): `));
    s = parseFloat(prompt(`Digite a hora ${i + 1} (0-59): `));
  } while (!horarioValido(h, m, s));

  console.log(
    `Horário ${i + 1}: ${String(h).padStart(2, '0')}.${String(m).padStart(
      2,
      '0',
    )}.${String(s).padStart(2, '0')}`,
  );
}
