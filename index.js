let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let player = {
    
    name: "Vishanth",
    credit: 200,
    details: ["Vishanth", 200],
    playerDetails: {
        playerName: "Vishanth",
        playerCredit: 200
    },
    playerFunction: function() {
        
        return "Vishanth"
    }
}

playerEl.textContent = player.playerFunction() + ": " + player.credit 

function getRandomNumber() {
    
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    return randomNumber
}

function startGame() {
    
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}

function renderGame() {
    
    sumEl.textContent = "Sum: " + sum 
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        
        cardsEl.textContent += " " + cards[i]
        if (sum < 21) {
        
        messageEl.textContent = "Take a new card"
        } else if (sum === 21) {
        
        messageEl.textContent = "You have got Blackjack"
        hasBlackjack = true
        } else {
        
        messageEl.textContent = "You are out of the game"
        isAlive = false
        }
    }
}

function newCard() {
    
    if (hasBlackjack === false && isAlive === true) {
        
        let card = getRandomNumber()
        cards.push(card)
        sum += card
        renderGame()  
    }
}
