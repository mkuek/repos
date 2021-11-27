function buildDeck() {
  let suits = ["clubs", "diamonds", "hearts", "spades"];
  let rank = [
    "ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
  ];
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < rank.length; j++) {
      let card = { Rank: rank[j], suit: suits[i] };
      deck.push(card);
    }
  }
  return deck;
}
window.addEventListener("DOMContentLoaded", function () {
  // Execute after page load
  let deal = document.getElementById("deal-button");
  deal.addEventListener("click", dealCards);
  function dealCards() {
    dealDeck("player", 2);
    render("player");
    dealDeck("dealer", 2);
    render("dealer");
    // for (let i = 0; i < 4; i++) {
    //   let dealerTarget = document.getElementById("dealer-hand");
    //   let dealerHand = document.createElement("img");
    //   dealerHand.src = "images/ace_of_clubs.png";
    //   dealerTarget.appendChild(dealerHand);
    //   let playerTarget = document.getElementById("player-hand");
    //   let playerHand = document.createElement("img");
    //   playerHand.src = "images/ace_of_clubs.png";
    //   playerTarget.appendChild(playerHand);
    // }
  }

  let hit = document.getElementById("hit-button");
  hit.addEventListener("click", hitMe);
  function hitMe() {
    dealDeck("player", 1);
    render("player");
    dealDeck("dealer", 1);
    render("dealer");

    // let playerTarget = document.getElementById("player-hand");
    // let playerHand = document.createElement("img");
    // playerHand.src = "images/ace_of_clubs.png";
    // playerTarget.appendChild(playerHand);
    // let dealerTarget = document.getElementById("dealer-hand");
    // let dealerHand = document.createElement("img");
    // dealerHand.src = "images/ace_of_clubs.png";
    // dealerTarget.appendChild(dealerHand);
  }

  let stand = document.getElementById("stand-button");
  stand.addEventListener("click", () => {
    dealDeck("player", 3);
    render("player");
    dealDeck("dealer", 3);
    render("dealer");
  });
  // var deck = buildDeck();
  // var hands = [];
  // var dealerHand = [];
  // var playerHand = [];
  // var card = [];
  function dealDeck(player, numCards) {
    let dealerHand = [];
    let playerHand = [];
    let hands = [];
    let deck = buildDeck();
    for (let i = 0; i < numCards; i++) {
      for (let player = 0; player < 2; player++) {
        let card = deck.pop();

        hands.push(card);
      }
    }

    // for (let i = 0; i < hands.length; i += 2) {
    //   dealerHand.push(hands[i]);
    //   playerHand.push(hands[i + 1]);
    // }

    dealerHand.push(hands[0]);
    dealerHand.push(hands[2]);
    playerHand.push(hands[1]);
    playerHand.push(hands[3]);
    if (player == "dealer") {
      return dealerHand;
    } else if (player == "player") {
      return playerHand;
    }

    // console.log(JSON.stringify(dealerHand));
    // dealerHand.forEach((card) => {
    //   console.log(card);
    // });
  }
  // var playerStart = dealDeck("player", 2);
  // var dealerStart = dealDeck("dealer", 2);

  function getcardimage(card) {
    return `images/${card.Rank}_of_${card.suit}.png`;
  }
  function render(target) {
    let playerStart = dealDeck("player", 2);
    let dealerStart = dealDeck("dealer", 2);
    if (target == "dealer") {
      // console.log("dealer hand: " + dealerHand);
      for (let i = 0; i < 2; i++) {
        let dealerTarget = document.getElementById("dealer-hand");
        let dealerHand = document.createElement("img");
        dealerHand.src = getcardimage(dealerStart[i]);
        dealerTarget.appendChild(dealerHand);
      }
    } else if (target == "player") {
      // console.log("player hand: " + playerHand);
      for (let i = 0; i < 2; i++) {
        let playerTarget = document.getElementById("player-hand");
        let playerHand = document.createElement("img");
        playerHand.src = getcardimage(playerStart[i]);
        playerTarget.appendChild(playerHand);
      }
    }
  }
});
