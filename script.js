const result = document.querySelector('.result')
const yourScore = document.querySelector('#humanScore')
const machineScore = document.querySelector('#machineScore')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSOR]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = `Sua escolha: ${human} <br>
        Escolha do Gon: ${machine} <br>
        Resultado da partida: Empate`
    } else if (
        human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK || 
        human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSOR || 
        human === GAME_OPTIONS.SCISSOR && machine === GAME_OPTIONS.PAPER) {
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