const readline = require('readline');
const request = require('request');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const deck = require('./functions/deck-requests.js');
const handEval = require('./functions/hand-evaluator.js');
const Hand = require('./classes/hand.js');

var hand = new Hand([], []);

drawCards = () => {
  deck.shuffleDeck();
  setTimeout(() => {
    request(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=5`, function (error, response, body) {
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

displayHand = () => {
  for (i = 0; i < 5; i++) {
    console.log(`${hand.valuesArr[i]} of ${hand.suitsArr[i]}`);
  }
};

userDrawAgain = () => {
  rl.question("\nEnter 'y' to draw again: \n", (answer) => {
    if (answer == 'y') {
      hand = new Hand([], []);
      userDrawsCards();
    } else {
      rl.close();
    }
  });
};

userDrawsCards = () => {
  drawCards();
  setTimeout(() => {
    console.log("Hand:");
    displayHand();
    console.log(`\nScore: ${handEval.highestScoringHand(hand)}`);
    userDrawAgain();
  }, 4000);
};

userDrawsCards();
