var handEval = require('../hand-evaluator.js');
const Hand = require('../hand.js');

let straightFlush = new Hand (['DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS'], ['10', 'JACK', 'QUEEN', 'KING', 'ACE'])
let fourOfAKind = new Hand (['DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS'], ['2', '2', '2', '2', 'ACE'])
let fullHouse = new Hand (['DIAMONDS', 'ACES', 'DIAMONDS', 'SPADES', 'DIAMONDS'], ['2', '2', '2', '3', '3'])
let flush = new Hand (['ACES', 'ACES', 'ACES', 'ACES', 'ACES'], ['10', 'JACK', '2', '5', 'ACE'])
let straight = new Hand (['DIAMONDS', 'ACES', 'ACES', 'ACES', 'ACES'], ['10', 'JACK', 'QUEEN', '8', '9'])

describe('handEval.highestScoringHand', function(){
  it ('should return with "straight flush"', function() {
    var string = handEval.highestScoringHand(straightFlush)

    if (string != "Straight Flush!") {
      throw new Error(`${string} should equal "Straight Flush!"`)
    }
  });

  it ('should return with "Four of a Kind!"', function() {
    var string = handEval.highestScoringHand(fourOfAKind)
    if (string != "Four of a Kind!") {
      throw new Error(`${string} should equal "Four of a Kind!"`)
    }
  });

  it ('should return with "Full House!"', function() {
    var string = handEval.highestScoringHand(fullHouse)
    if (string != "Full House!") {
      throw new Error(`${string} should equal "Full House!"`)
    }
  });

  it ('should return with "Flush!"', function() {
    var string = handEval.highestScoringHand(flush)
    if (string != "Flush!") {
      throw new Error(`${string} should equal "Flush!"`)
    }
  });

  it ('should return with "Straight!"', function() {
    var string = handEval.highestScoringHand(straight)
    if (string != "Straight!") {
      throw new Error(`${string} should equal "Straight!"`)
    }
  });

});
