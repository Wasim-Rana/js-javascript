let randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const input = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const result = document.querySelector('.lastResult')
const lowOrhi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const para = document.createElement('p')

let prevGuess = []
let NumGuess = 1 

let Play = true

if(Play){
    submit.addEventListener('click',(e) => {
        e.preventDefault()
        const Inputvalue = parseInt(input.value)
        validateGuess(Inputvalue)
    })
}

function validateGuess(guess){
    // check weather the number is valid or not
    if(isNaN(guess)|| guess <= 1 || guess === '' || guess > 100){
        alert('Please enter a valid number ')
    }else{
        prevGuess.push(guess)
        if(NumGuess === 11){
                DisplayGuess(guess)
                display(`Game Over. Random number was ${randomNumber }`)
                endGame()
        }else{
            DisplayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    // check the number is higher then random number or not 
    if(guess === randomNumber){
        display(`you guess it right`)
        endGame()
    }else if (guess < randomNumber){
        display(`number is Too low`)
    }else{
        display(`number is too high `)
    }
}
function DisplayGuess(guess){
    input.value = ''
    guessSlot.innerHTML += `${guess} `
    NumGuess++ 
    result.innerHTML=`${10 - NumGuess}`
}

function display(message){
    lowOrhi.innerHTML= `<h2>${message}</h2>`
}

function endGame(){
    input.value = ''
    input.setAttribute('disabled','')
    para.classList.add('button')
    para.innerHTML='<h2 id="newGame">Start new game</h2>'
    startOver.appendChild(para)
    Play = false
    newGame()
}

function newGame(){
const newGameButton = document.querySelector('#newGame')
newGameButton.addEventListener('click', (e) => {
    randomNumber == parseInt(Math.random() * 100 + 1)
    prevGuess=[]
    NumGuess=1
    guessSlot.innerHTML= ''
    result.innerHTML=`${11 - NumGuess}`
    input.removeAttribute('disabled')
    startOver.removeChild(para)
    Play = true 
})
}
