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
const dealButton = document.getElementById("deal-button");
const hitButton = document.getElementById("hit-button");
const standButton = document.getElementById("stand-button");


function addCardToHand (pathToCardImg,receiver) {
  const cardImg = document.createElement("img");
  cardImg.setAttribute('src',pathToCardImg);
  receiver.append(cardImg);
}


dealButton.addEventListener("click", () => {
  addCardToHand("./images/9_of_diamonds.png",playerHand);

  addCardToHand("./images/10_of_hearts.png",dealerHand);
  
  addCardToHand('./images/10_of_spades.png',playerHand);
  // const cardImg3 = document.createElement("img");
  // cardImg3.setAttribute('src','./images/10_of_spades.png');
  // playerHand.append(cardImg3);

  addCardToHand("./images/10_of_diamonds.png",dealerHand);
  // const cardImg4 = document.createElement("img");
  // cardImg4.setAttribute('src',"./images/10_of_diamonds.png");
  // dealerHand.append(cardImg4);
})
 
hitButton.addEventListener("click", () => {
  addCardToHand("./images/10_of_diamonds.png",playerHand);
  // const cardImg = document.createElement("img");
  // cardImg.setAttribute('src',"./images/10_of_diamonds.png");
  // playerHand.append(cardImg);
addCardToHand("./images/10_of_diamonds.png",dealerHand);
  // const cardImg2 = document.createElement("img");
  // cardImg2.setAttribute('src',"./images/10_of_diamonds.png")
  // dealerHand.append(cardImg2);
})
