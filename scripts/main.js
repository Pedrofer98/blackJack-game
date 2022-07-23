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
const playerHandArray = [] // created player hand array to push ranmdom cards from deck into it.
const dealerHandArray = [] // created dealerhand array to push random cards from deck into.

function addCardWithImageToHand (card, hand) { // creating the function ( executable code block)
  const cardImg = document.createElement("img");
  cardImg.setAttribute('src', `./images/${card.rank}_of_${card.suit}.png`)
  hand.append(cardImg);
}
  // receiver.append(cardImg);
//   deck.pop(Math.random()); // popping random card from deck.
//   const randomCardTobeRemovedFromDeck =deck.pop(Math.random()); // assigning that card to a var.
// playerHandArray.push(randomCardTobeRemovedFromDeck); // pushing that card into player hand array
//   console.log(playerHandArray);


function initialDeal (playerHandArray,dealerHandArray){
  for (let i=0;i<2;i++) {
    var randomNumber1 = Math.floor(Math.random()*deck.length);
    var randomNumber2 = Math.floor(Math.random()*(deck.length-1));
    playerHandArray.push(deck.splice(randomNumber1,1)[0]);
    dealerHandArray.push(deck.splice(randomNumber2,1)[0]);
  } // this fucntion does what randomCardTobeRemovedFromDeck did


  // const randomCardTobeRemovedFromDeck =deck.pop(Math.random()); // assigning that card to a var.
  //   const randomCardTobeRemovedFromDeck2 = deck.pop(Math.random); // my second random card.
  //   array1.push(randomCardTobeRemovedFromDeck); // pushing that card into player hand array
  //     console.log(playerHandArray);// so we can see the card objct in console
  //   array2.push(randomCardTobeRemovedFromDeck2);
  //   console.log(dealerHandArray);
  }



dealButton.addEventListener("click", () => {
  initialDeal(playerHandArray,dealerHandArray);
  console.log(playerHandArray,dealerHandArray);
  getCardImage(playerHandArray,dealerHandArray);
  

  // getRandomCardFromDeck(DECK)
  // AddRandomCardToHand(CARD_TO_ADD,HAND_TO_ADD_TO)

})
 
hitButton.addEventListener("click", () => {
  var randomNumber1 = Math.floor(Math.random()*deck.length);
  var randomNumber2 = Math.floor(Math.random()*(deck.length-1));
  var randomCard1 = deck.splice(randomNumber1,1)[0];
  var randomCard2 = deck.splice(randomNumber2,1)[0]
  playerHandArray.push(randomCard1);
  dealerHandArray.push(randomCard2);
  addCardWithImageToHand(randomCard1,playerHand);
  addCardWithImageToHand(dealerHandArray[dealerHandArray.length-1],dealerHand);
})

//   addCardToHand("./images/10_of_diamonds.png",playerHand);
//   // const cardImg = document.createElement("img");
//   cardImg.setAttribute('src',"./images/10_of_diamonds.png");
//   playerHand.append(cardImg);
// addCardToHand("./images/10_of_diamonds.png",dealerHand);
//   const cardImg2 = document.createElement("img");
//   cardImg2.setAttribute('src',"./images/10_of_diamonds.png")
//   dealerHand.append(cardImg2);
// })
// STEP 8 Write a function getCardImage that will take a card object and return an image element containing the correct image URL for that card.
function getCardImage (playerHandArray, dealerHandArray){
  for (let i=0; i<playerHandArray.length;i++) {
    addCardWithImageToHand(playerHandArray[i], playerHand);
  }
  for (let i=0; i<dealerHandArray.length;i++) {
    addCardWithImageToHand(dealerHandArray[i], dealerHand);
  }
}
function calculatePoints (){
  let totalPlayerPoints = playerHandArray.keys(pointValue);
  let totalDealerPoints = dealerHandArray.keys(pointValue);
  console.log(totalDealerPoints);
  console.log(totalPlayerPoints);
  
  return "player points =" + totalPlayerPoints && "dealer points =" + totalDealerPoints;
}

const playerPointsDisplay = document.querySelectorAll('#player-points');
playerPointsDisplay.innerHTML= totalPlayerPoints;

const dealerPointsDisplay = document.querySelectorAll('#dealer-points');
dealerHandArray.innerHTML= totalDealerPoints;

