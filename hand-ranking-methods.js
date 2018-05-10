var _ = require('lodash');

exports.isFourOfAKind = (hand) => {
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

exports.isFlush = (hand) => {
  if (_.uniq(hand.suitsArr).length == 1) {
    return true
  } else {
    return false
  }
}

exports.isStraight = (hand) => {
  var sortedHand = hand.valuesArr.sort(function(a, b){return a - b});
  for(var i = 0; i < 4; i++) {
    if(parseInt(sortedHand[i]) + 1 != sortedHand[i + 1]) {
      return false
    }
  }
  return true
}


exports.isThreeOfAKind = (hand) => {
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

exports.isTwoPair = (hand) => {
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

exports.isPair = (hand) => {
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
