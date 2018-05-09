const methods = require('./hand-ranking-methods.js');
const Hand = require('./hand.js');

let hand = new Hand (['QD', '9H', '9D', 'AD', 'JD'], ['SPADES', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS'], ['5', '2', '2', '4', '2'])

highestScoringHand = (hand) => {
  if (methods.isStraight(hand) && methods.isFlush(hand)) {
    return "Straight Flush!"
  }
  if (methods.isFourOfAKind(hand)) {
    return "Four of a Kind!"
  }
  if (methods.isPair(hand) && methods.isThreeOfAKind(hand)) {
    return "Full House!"
  }
  if (methods.isFlush(hand)) {
    return "Flush!"
  }
  if (methods.isStraight(hand)) {
    return "Straight!"
  }
  if (methods.isThreeOfAKind(hand)) {
    return "Three of a Kind!"
  }
  if (methods.isTwoPair(hand)) {
    return "Two Pair!"
  }
  if (methods.isPair(hand)) {
    return "One Pair!"
  }
}

console.log(highestScoringHand(hand))
