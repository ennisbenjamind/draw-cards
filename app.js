const request = require('request');
const Deck = require('./deck.js');
const Hand = require('./hand.js');

let deck;
let hand = new Hand ([])

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
          hand.cards.push(card.suit, card.value)
        })
      }
    })
  }, 2000)
}

drawCards()
setTimeout(() => {
  console.log(hand)
}, 4000)
