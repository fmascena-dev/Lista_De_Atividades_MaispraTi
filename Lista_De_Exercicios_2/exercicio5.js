// 5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')()

const jogador = prompt("Escolhe Pedra, Papel ou Tesoura? ").toLowerCase()
let opcoes = ["pedra", "papel", "tesoura"]
let computador = opcoes[Math.floor(Math.random() * 3)]

console.log(`Computador escolheu: ${computador}`)

if (jogador === computador) {
    console.log("Empate!")
} else if (
    (jogador === "pedra" && computador === "tesoura") ||
    (jogador === "papel" && computador === "pedra") ||
    (jogador === "tesoura" && computador === "papel")
) {
    console.log("Você venceu!")
} else {
    console.log("Você perdeu!")
}