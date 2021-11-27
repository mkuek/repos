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
    let dealerPoints = document.getElementById("dealer-points").innerText;
    let playerPoints = document.getElementById("player-points").innerText;
    let messages = document.getElementById("messages");
    dealDeck("players", 2);
    document.getElementById("deal-button").disabled = true;
    document.getElementById("hit-button").disabled = false;
    document.getElementById("stand-button").disabled = false;
    // render("player", 2);
    // dealDeck("dealer", 1);
    // render("dealer", 2);
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
    let dealerPoints = document.getElementById("dealer-points").innerText;
    let playerPoints = document.getElementById("player-points").innerText;
    let messages = document.getElementById("messages");
    if (dealerPoints <= 17) {
      dealDeck("dealer", 1);
    }
    dealDeck("player", 1);

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
    let dealerPoints = document.getElementById("dealer-points").innerText;
    let playerPoints = document.getElementById("player-points").innerText;
    let messages = document.getElementById("messages");
    console.log("dealer points:" + dealerPoints);
    console.log("player points:" + playerPoints);
    console.log(dealerPoints > playerPoints);
    let i = 0;

    while (dealerPoints < 17) {
      dealDeck("dealer", 1);
      dealerPoints = document.getElementById("dealer-points").innerText;
      console.log(dealerPoints);
      if (dealerPoints >= 17 && dealerPoints <= 21) {
        if (dealerPoints > playerPoints && dealerPoints <= 21) {
          messages.innerText = "DEALER WINS";
          return alert("DEALER WINS");
        } else if (playerPoints > dealerPoints) {
          return (messages.innerText = "PLAYER WINS");
        }
      } else if (playerPoints > dealerPoints || dealerPoints > 21) {
        return (messages.innerText = "PLAYER WINS");
      }
      i++;
    }
    if (dealerPoints >= 17 && dealerPoints <= 21) {
      if (dealerPoints > playerPoints && dealerPoints <= 21) {
        messages.innerText = "DEALER WINS";
        return alert("DEALER WINS");
      }
    }

    // else if (dealerPoints <= 17) {
    //   dealDeck("dealer", 1);
    // }
  });
  var deck = buildDeck();
  // var hands = [];
  // var dealerHand = [];
  // var playerHand = [];
  // var card = [];
  function dealDeck(target, numCards) {
    let dealerHand = [];
    let playerHand = [];
    let hands = [];
    shuffle(deck);
    // let deck = buildDeck();
    for (let i = 0; i <= numCards - 1; i++) {
      if (target == "players") {
        for (let player = 0; player < 2; player++) {
          let card = deck.pop();
          hands.push(card);
        }
      } else {
        let card = deck.pop();
        hands.push(card);
      }
    }
    if (target == "players") {
      for (let i = 0; i <= hands.length - 1; i += 2) {
        dealerHand.push(hands[i]);
        playerHand.push(hands[i + 1]);
      }
    } else if (target == "player") {
      for (let i = 0; i <= hands.length - 1; i += 2) {
        playerHand.push(hands[i]);
      }
    } else if (target == "dealer") {
      for (let i = 0; i <= hands.length - 1; i += 2) {
        dealerHand.push(hands[i]);
      }
    }

    // dealerHand.push(hands[0]);
    // dealerHand.push(hands[2]);
    // playerHand.push(hands[1]);
    // playerHand.push(hands[3]);
    // console.log(playerHand);
    // console.log(dealerHand);

    let playerPoints = document.getElementById("player-points");
    render("player", playerHand.length, playerHand);
    if (playerPoints.innerText > 21) {
      return (messages.innerText = "PLAYER BUSTED");
    }
    render("dealer", dealerHand.length, dealerHand);

    // function sleep(ms) {
    //   return new Promise((resolve) => setTimeout(resolve, ms));
    // }
    // async function demo() {
    //   let playerPoints = document.getElementById("player-points");
    //   render("player", playerHand.length, playerHand);
    //   if (playerPoints.innerText > 21) {
    //     return (messages.innerText = "PLAYER BUSTED");
    //   }
    //   await sleep(0);
    //   render("dealer", dealerHand.length, dealerHand);
    // }
    // demo();

    // for (let i = 0; i <= dealerHand.length - 1; i++) {
    //   let dealerTarget = document.getElementById("dealer-hand");
    //   let dealerCards = document.createElement("img");
    //   dealerCards.src = getcardimage(dealerHand[i]);
    //   dealerTarget.appendChild(dealerCards);
    // }
    // for (let i = 0; i <= playerHand.length - 1; i++) {
    //   let playerTarget = document.getElementById("player-hand");
    //   let playerCards = document.createElement("img");
    //   playerCards.src = getcardimage(playerHand[i]);
    //   playerTarget.appendChild(playerCards);
    // }
    // if (player == "dealer") {
    //   console.log("dealer Hand :" + dealerHand);

    //   return dealerHand;
    // } else if (player == "player") {
    //   return playerHand;
    // }

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
  function render(target, num, hand) {
    let messages = document.getElementById("messages");
    if (target == "dealer") {
      calculatePoints(hand);
      for (let i = 0; i < num; i++) {
        let dealerTarget = document.getElementById("dealer-hand");
        let dealerCards = document.createElement("img");
        let dealerPoints = document.getElementById("dealer-points");
        let playerPoints = document.getElementById("player-points");
        dealerCards.src = getcardimage(hand[i]);
        dealerTarget.appendChild(dealerCards);
        dealerPoints.innerText = handPoints - playerPoints.innerText;
        if (playerPoints.innerText > 21) {
          return console.log("player busted");
        } else if (dealerPoints.innerText > 21) {
          document.getElementById("hit-button").disabled = true;
          document.getElementById("stand-button").disabled = true;
          return (messages.innerText = "DEALER BUSTED");
        } else if (dealerPoints.innerText == 21) {
          document.getElementById("hit-button").disabled = true;
          document.getElementById("stand-button").disabled = true;
          return (messages.innerText = "DEALER WINS");
        }
      }
    } else if (target == "player") {
      calculatePoints(hand);
      for (let i = 0; i < num; i++) {
        let playerTarget = document.getElementById("player-hand");
        let playerCards = document.createElement("img");
        let dealerPoints = document.getElementById("dealer-points");
        let playerPoints = document.getElementById("player-points");
        playerCards.src = getcardimage(hand[i]);
        playerTarget.appendChild(playerCards);
        playerPoints.innerText = handPoints - dealerPoints.innerText;
        if (playerPoints.innerText > 21) {
          document.getElementById("hit-button").disabled = true;
          document.getElementById("stand-button").disabled = true;
          return (messages.innerText = "PLAYER BUSTED");
        }
      }
    }
  }

  function shuffle(deck) {
    for (let i = 0; i < 500; i++) {
      let swap1 = Math.floor(Math.random() * deck.length);
      // console.log(swap1);
      let swap2 = Math.floor(Math.random() * deck.length);
      // console.log(swap2);
      let temp = deck[swap1];
      deck[swap1] = deck[swap2];
      deck[swap2] = temp;
    }
    return deck;
  }
  var handPoints = 0;

  function calculatePoints(hand) {
    for (i = 0; i < hand.length; i++) {
      // console.log(typeof parseInt(hand[i].Rank));
      // console.log(typeof handPoints);
      // if (hand[i].Rank == "ace" && isNaN(parseInt(hand[i + 1].Rank)) == true) {
      //   handPoints += 21;
      // }
      if (hand[i].Rank == "ace") {
        handPoints += 1;
      } else if (isNaN(parseInt(hand[i].Rank)) == true) {
        // console.log("Hello");
        handPoints += 10;
      } else {
        handPoints += parseInt(hand[i].Rank);
      }
    }
    // console.log(handPoints);
  }
});
