const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const handEval = require('./hand-evaluator');
const Hand = require('./hand.js');

var deck;
var hand = new Hand([], []);

getDeck = () => {
  request('https://deckofcardsapi.com/api/deck/new/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body);
      console.log('retrieving deck..');
      deck = data.deck_id;
    }
  });
};

shuffleDeck = () => {
  getDeck();
  setTimeout(() => {
    request(`https://deckofcardsapi.com/api/deck/${deck}/shuffle/`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
        console.log('shuffling deck..');
      }
    });
  }, 1000);
};

drawCards = () => {
  shuffleDeck();
  setTimeout(() => {
    request(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=5`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
        data.cards.map((card) => {
          hand.valuesArr.push(card.value);
          hand.suitsArr.push(card.suit);
        });
      }
    });
  }, 2000);
};

userDrawsCards = () => {
  drawCards();
  setTimeout(() => {
    for (i = 0; i < 5; i++) {
      console.log(`${hand.valuesArr[i]} of ${hand.suitsArr[i]}`);
    }
    console.log(handEval.highestScoringHand(hand));
    rl.question("Enter 'y' to draw again: ", (answer) => {
      if (answer == 'y') {
        hand = new Hand([], []);
        userDrawsCards();
      } else {
        rl.close();
      }
    });
  }, 4000);
};

userDrawsCards();
