const result = document.querySelector('.result')
const yourScore = document.querySelector('#humanScore')
const machineScore = document.querySelector('#machineScore')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = `Sua escolha: ${human} <br>
        Escolha do Gon: ${machine} <br>
        Resultado da partida: Empate`
    } else if (human === 'paper' && machine === 'rock' || human === 'rock' && machine === 'scissor' || human === 'scissor' && machine === 'paper') {
        humanScoreNumber++
        yourScore.innerHTML = humanScoreNumber
        result.innerHTML = `Sua escolha: ${human} <br>
        Escolha do Gon: ${machine} <br>
        Resultado da partida: Você ganhou!`
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = `Sua escolha: ${human} <br>
        Escolha do Gon: ${machine} <br>
        Resultado da partida: O Gon ganhou!`
    }
}