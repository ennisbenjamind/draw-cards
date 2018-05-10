Draw Cards
---
Description: A node.js application that retrieves a deck, shuffles it, and draws
5 cards utilizing the deck of cards API (https://deckofcardsapi.com/). In your
console, the application will print your hand and its highest possible poker
score (https://en.wikipedia.org/wiki/List_of_poker_hands).
________________
Node Version:     
**10.0.0**  
```
# Install dependencies!
$ npm install
```
Run:
---
```
# Run Node
$ node draw-hand.js
```
```
# To run our test suite:
$ npm test
```
Notes:
---
- It is impossible to score a five of a kind because the deck of cards API
does not include jokers.

Assumptions:
---
- The suits and values can be stored in separate arrays in the Hand object.
One card's suit and value are stored in the same index in each array, so the
combinations are correct when printed to the console. (Confirmed with debugging)
Furthermore, individual suit and value combinations are not pertinent to
hand scoring. A flush and straight flush can both be determined by analyzing
the separate arrays.
- The user can identify why their hand received its score.
- Face cards are converted to string integers during evaluation to identify
straights.
