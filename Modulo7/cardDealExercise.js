var players = document.getElementById("players");
var output = document.getElementById("output");

var suits = ["♠", "♥", "♦", "♣"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var colors = ["red", "black"];


class Card {
  constructor(suit, value, color) {
    this.suit = suit;
    this.value = value;
    this.color = color;
  }
}

class Player {
  constructor(playerNumber, cards) {
    this.playerNumber = playerNumber;
    this.cards = cards;
  }
}

function makeCards() {
  var cards = [];
  for (let index = 0; index < suits.length; index++) {
    var suit = suits[index];
    var color;
    if (suit === "♠" || suit === "♣") {
      color = colors[1];
    } else {
      color = colors[0];
    }
    for (let ind = 0; ind < values.length; ind++) {
      var value = values[ind];
      var card = new Card(suit, value, color);
      cards.push(card);
    }
  }
  shuffleCards(cards);
}

function shuffleCards(cards) {  
  var numberOfPLayers = Number(players.value);
  var cardsForEachPlayer = 52 / numberOfPLayers;
  var allPlayers = [];
  for (var playerNumber = 0; playerNumber < numberOfPLayers; playerNumber++) {
    var cardsOfPlayer = [];
    for (var i = 0; i < cardsForEachPlayer; i++) {
      var cardNumber = Math.floor(Math.random() * (cards.length - 1));
      if (cards[cardNumber] === undefined) {
        break;
      } else {
        cardsOfPlayer.push(cards[cardNumber]);        
        cards.splice(cardNumber, 1);
      }   
    }
    var player = new Player(playerNumber, cardsOfPlayer);
    allPlayers.push(player);
  }
  outputPlayerCards(allPlayers);
}


function outputPlayerCards(allPlayers) {
  for (let index = 0; index < allPlayers.length; index++) {
    var element = allPlayers[index];
    var allCards = element.cards;
    output.innerHTML += "Player " + (element.playerNumber + 1) + ": "
    for (let curCard = 0; curCard < allCards.length; curCard++) {
      var element = allCards[curCard];
      var newSpan = document.createElement('span');
      newSpan.innerHTML += element.value + element.suit + " ";
      newSpan.style.color = element.color;
      output.appendChild(newSpan);     
    }
    output.innerHTML += "<br />";
  }
}
