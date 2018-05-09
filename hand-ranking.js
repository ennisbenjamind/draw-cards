var _ = require('lodash');
const Hand = require('./hand.js');

let hand = new Hand (['QD', '9H', '9D', 'AD', 'JD'], ['DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS', 'DIAMONDS'], ['1', '1', '4', '4', '9'])

isStraightFlush = (hand) => {
  if (isStraight(hand) && isFlush(hand) ) {
    return true
  } else {
    return false
  }
}

isFourOfAKind = (hand) => {
  for (i = 0; i < 5; i++){
    let count = 0
    hand.valuesArr.forEach((value) => {
      if (value == hand.valuesArr[i] ) {
        count++
      }
    })
    if (count == 4) {
      return true
    }
  }
  return false
}

isFullHouse = (hand) => {
  if (isPair(hand) && isThreeOfAKind(hand)) {
    return true
  }
  return false
}

isFlush = (hand) => {
  if (_.uniq(hand.suitsArr).length == 1) {
    return true
  } else {
    return false
  }
}

isStraight = (hand) => {
  var sortedHand = _.sortBy(hand.valuesArr)
  for(var i = 0; i < 4; i++) {
    if(parseInt(sortedHand[i]) + 1 != sortedHand[i + 1]) {
      return false
    }
  }
  return true
}


isThreeOfAKind = (hand) => {
  for (i = 0; i < 5; i++){
    let count = 0
    hand.valuesArr.forEach((value) => {
      if (value == hand.valuesArr[i] ) {
        count++
      }
    })
    if (count == 3) {
      return true
    }
  }
  return false
}

isTwoPair = (hand) => {
  let pairs = 0
  for (i = 0; i < 5; i++){
    let count = 0
    hand.valuesArr.forEach((value) => {
      if (value == hand.valuesArr[i] ) {
        count++
      }
    })
    if (count == 2) {
      pairs++
    }
  }
  return pairs
  if (pairs > 1) {
    return true
  }
  return false
}

isPair = (hand) => {
  for (i = 0; i < 5; i++){
    let count = 0
    hand.valuesArr.forEach((value) => {
      if (value == hand.valuesArr[i] ) {
        count++
      }
    })
    if (count == 2) {
      return true
    }
  }
  return false
}




console.log(isStraightFlush(hand))
