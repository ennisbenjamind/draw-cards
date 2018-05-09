const request = require('request');
const Deck = require('./deck.js');
const Hand = require('./hand.js');

let deck;
let hand = new Hand ([], [], [])

getDeck = () => {
  request('https://deckofcardsapi.com/api/deck/new/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      data = JSON.parse(body)
      console.log('retrieving deck..')
      deck = new Deck(data.deck_id)
    }
  })
}

shuffleDeck = () => {
  getDeck()
  setTimeout(() => {
    request(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = JSON.parse(body)
        console.log("shuffling deck..")
      }
    })
  }, 1000)
}

drawCards = () => {
  shuffleDeck()
  setTimeout(() => {
    request(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=5`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = JSON.parse(body)
        data.cards.map((card) => {
          hand.cardsArr.push(card.code)
          hand.valuesArr.push(card.value)
          hand.suitsArr.push(card.suit)
        })
      }
    })
  }, 2000)
}

drawCards()
setTimeout(() => {
  for (i = 0; i < 5; i++) {
  console.log(`${hand.valuesArr[i]} of ${hand.suitsArr[i]}`)
  }
}, 4000)
