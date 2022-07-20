const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10 : rank,
  };
  deck.push(card);
};

for (let suit of suits) {
  for (const rank of ranks) {
    makeDeck(rank, suit);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  // Execute after page load
  console.log(deck)
});
 
const buttons = document.querySelector(".buttons");
const dealBut = document.getElementById("deal-button");
const hitBut = document.getElementById("hit-button");
const standBut = document.getElementById("stand-button");


function cardToHand (card,receiver) {
  const cardImg = document.createElement("img");
  cardImg.setAttribute('src',card);
  receiver.append(cardImg);
}


dealBut.addEventListener("click", () => {
  cardToHand("./images/9_of_diamonds.png",playerHand)

  const cardImg2 = document.createElement("img");
  cardImg2.setAttribute('src','./images/10_of_hearts.png');
  dealerHand.append(cardImg2);
  
  const cardImg3 = document.createElement("img");
  cardImg3.setAttribute('src','./images/10_of_spades.png');
  playerHand.append(cardImg3);

  const cardImg4 = document.createElement("img");
  cardImg4.setAttribute('src',"./images/10_of_diamonds.png");
  dealerHand.append(cardImg4);
})
 
hitBut.addEventListener("click", () => {
  const cardImg = document.createElement("img");
  cardImg.setAttribute('src',"./images/10_of_diamonds.png");
  playerHand.append(cardImg);
  const cardImg2 = document.createElement("img");
  cardImg2.setAttribute('src',"./images/10_of_diamonds.png")
  dealerHand.append(cardImg2);
})
