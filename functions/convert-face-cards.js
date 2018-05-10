const Hand = require('../classes/hand.js');

//Face cards are converted to string integers during evaluation to identify
//straights.

exports.convertFaceCards = (hand) => {
    for (i = 0; i < 5; i++) {
      if (hand.valuesArr[i] == 'ACE') {
        hand.valuesArr[i] = '14';
      }
      if (hand.valuesArr[i] == 'KING') {
        hand.valuesArr[i] = '13';
      }
      if (hand.valuesArr[i] == 'QUEEN') {
        hand.valuesArr[i] = '12';
      }
      if (hand.valuesArr[i] == 'JACK') {
        hand.valuesArr[i] = '11';
      }
    }
  return hand;
};
