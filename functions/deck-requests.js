const request = require('request');

getDeck = () => {
  request('https://deckofcardsapi.com/api/deck/new/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let data = JSON.parse(body);
      console.log('Retrieving deck..\n');
      deck_id = data.deck_id;
    }
  });
};

exports.shuffleDeck = () => {
  getDeck();
  setTimeout(() => {
    request(`https://deckofcardsapi.com/api/deck/${deck_id}/shuffle/`, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        data = JSON.parse(body);
        console.log('Shuffling deck..\n');
      }
    });
  }, 1000);
};
