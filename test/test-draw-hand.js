var handEval = require('../draw-hand.js');
const Hand = require('../classes/hand.js');

let hand = new Hand (['DIAMONDS', 'HEARTS', 'SPADES', 'HEARTS', 'HEARTS'], ['10', '8', '7', 'KING', '9']);

describe('handEval.highestScoringHand', function(){
  
  it ('should return with "Straight Flush!"', function() {
    var string = handEval.highestScoringHand(straightFlush);

    if (string != "Straight Flush!") {
      throw new Error(`${string} should equal "Straight Flush!"`);
    }
  });

  it ('should return with "Four of a Kind!"', function() {
    var string = handEval.highestScoringHand(fourOfAKind);
    if (string != "Four of a Kind!") {
      throw new Error(`${string} should equal "Four of a Kind!"`);
    }
  });

  it ('should return with "Full House!"', function() {
    var string = handEval.highestScoringHand(fullHouse);
    if (string != "Full House!") {
      throw new Error(`${string} should equal "Full House!"`);
    }
  });

  it ('should return with "Flush!"', function() {
    var string = handEval.highestScoringHand(flush);
    if (string != "Flush!") {
      throw new Error(`${string} should equal "Flush!"`);
    }
  });

  it ('should return with "Straight!"', function() {
    var string = handEval.highestScoringHand(straight);
    if (string != "Straight!") {
      throw new Error(`${string} should equal "Straight!"`);
    }
  });

  it ('should return with "Three of a Kind!"', function() {
    var string = handEval.highestScoringHand(threeOfAKind);
    if (string != "Three of a Kind!") {
      throw new Error(`${string} should equal "Three of a Kind!"`);
    }
  });

  it ('should return with "Two Pair!"', function() {
    var string = handEval.highestScoringHand(twoPair);
    if (string != "Two Pair!") {
      throw new Error(`${string} should equal "Two Pair!"`);
    }
  });

  it ('should return with "One Pair!"', function() {
    var string = handEval.highestScoringHand(pair);
    if (string != "One Pair!") {
      throw new Error(`${string} should equal "One Pair!"`);
    }
  });

  it ('should return with "High card..."', function() {
    var string = handEval.highestScoringHand(highCard);
    if (string != "High card...") {
      throw new Error(`${string} should equal "High card..."`);
    }
  });

});
