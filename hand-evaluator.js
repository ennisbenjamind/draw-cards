const evalMethods = require('./hand-ranking-methods.js');
const convert = require('./convert-face-cards.js');

highestScoringHand = (hand) => {
  convert.convertFaceCards(hand)
  if (evalMethods.isStraight(hand) && evalMethods.isFlush(hand)) {
    return "Straight Flush!"
  }
  if (evalMethods.isFourOfAKind(hand)) {
    return "Four of a Kind!"
  }
  if (evalMethods.isPair(hand) && evalMethods.isThreeOfAKind(hand)) {
    return "Full House!"
  }
  if (evalMethods.isFlush(hand)) {
    return "Flush!"
  }
  if (evalMethods.isStraight(hand)) {
    return "Straight!"
  }
  if (evalMethods.isThreeOfAKind(hand)) {
    return "Three of a Kind!"
  }
  if (evalMethods.isTwoPair(hand)) {
    return "Two Pair!"
  }
  if (evalMethods.isPair(hand)) {
    return "One Pair!"
  } else {
    return "High card..."
  }
}

console.log(highestScoringHand(hand))
