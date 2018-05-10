const evalFunction = require('./hand-ranking-functions.js');
const convert = require('./convert-face-cards.js');

exports.highestScoringHand = (hand) => {
  convert.convertFaceCards(hand);
  if (evalFunction.isStraight(hand) && evalFunction.isFlush(hand)) {
    return "Straight Flush!";
  }
  if (evalFunction.isFourOfAKind(hand)) {
    return "Four of a Kind!";
  }
  if (evalFunction.isPair(hand) && evalFunction.isThreeOfAKind(hand)) {
    return "Full House!";
  }
  if (evalFunction.isFlush(hand)) {
    return "Flush!";
  }
  if (evalFunction.isStraight(hand)) {
    return "Straight!";
  }
  if (evalFunction.isThreeOfAKind(hand)) {
    return "Three of a Kind!";
  }
  if (evalFunction.isTwoPair(hand)) {
    return "Two Pair!";
  }
  if (evalFunction.isPair(hand)) {
    return "One Pair!";
  } else {
    return "High card...";
  }
};
