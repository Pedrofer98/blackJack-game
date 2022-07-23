const dealerHand = document.getElementById("dealer-hand");
const playerHand = document.getElementById("player-hand");
const deck = [];
const suits = ["hearts", "spades", "clubs", "diamonds"];
const ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
const makeDeck = (rank, suit) => {
    const card = {};
  card.rank = rank;
  card.suit = suit;
  if (card.rank < 10){
    card.pointValue = rank;
  } else if (rank === "ace"){
    card.pointValue = 11;
  } else {
    card.pointValue = 10;
  }
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
const dealerHandArray = []
// the below function will create 2 random numbers(2x) and push them into the player & dealer hands array.
function initialDeal (playerHandArray,dealerHandArray){
    for (let i=0;i<2;i++) {
        var randomNumber1 = Math.floor(Math.random()*deck.length);
        var randomNumber2 = Math.floor(Math.random()*(deck.length-1));
        playerHandArray.push(deck.splice(randomNumber1,1)[0]);
        dealerHandArray.push(deck.splice(randomNumber2,1)[0]);
    } // this fucntion does what randomCardTobeRemovedFromDeck: when we hit the deal button we will
}
// now we will code for : when the deal button is clicked, we will deal 4 times - 
dealButton.addEventListener('click',() =>{
   initialDeal(playerHandArray,dealerHandArray); // calling on initialDeal will give us 4 cards.
   console.log(playerHandArray,dealerHandArray);
   addCardWithImageToHand(playerHandArray,dealerHandArray)
})

// when we hit the HIT button, we will again generate 2 random numbers, pass that number into 
// as the index of our deck array and splice at that number, giving us a random card. 
hitButton.addEventListener('click',() => {
    var randomNumber1 = Math.floor(Math.random()*deck.length);
    var randomNumber2 = Math.floor(Math.random()*(deck.length-1));
    var randomCard1 = deck.splice(randomNumber1,1)[0];
    var randomCard2 = deck.splice(randomNumber2,1)[0]
    playerHandArray.push(randomCard1);
    dealerHandArray.push(randomCard2);
    addCardWithImageToHand(randomCard1,playerHand);
    addCardWithImageToHand(dealerHandArray[dealerHandArray.length-1],dealerHand);
    // step 11 function and 
})

function addCardWithImageToHand (card, hand) { // this func will create a cardimg in the html
// and set its source attribute to whatever its rank and suit are. now are cardimg has an acutal corresponding image.
// we then pass that cardImg into the hand array we pass into the function.
    const cardImg = document.createElement("img");
    cardImg.setAttribute('src', `./images/${card.rank}_of_${card.suit}.png`)
    hand.append(cardImg);
}
// with this function we will call on the previous fucntion (addCardWithImageToHand)
// to execute for every item on the playerHand array and dealer hand array, giving us 
// the corresponding image to each card that was delt to the player and dealer hand array.
function getCardImage (playerHandArray, dealerHandArray){
    for (let i=0; i<playerHandArray.length;i++) {
      addCardWithImageToHand(playerHandArray[i], playerHand);
    }
    for (let i=0; i<dealerHandArray.length;i++) {
      addCardWithImageToHand(dealerHandArray[i], dealerHand);
    }
  }

  //now we will build a fucntion for to calculate points for a hand.
  function  calculatePoints (){
    let totalPlayerPoints = playerHandArray.keys(pointValue);
    let totalDealerPoints = dealerHandArray.keys(pointValue);
    console.log(totalDealerPoints);
    console.log(totalPlayerPoints);
    
    return "player points =" + totalPlayerPoints && "dealer points =" + totalDealerPoints;
  }
  // the following code will take the HTML tags that house the dealer points and player points, access its innerHTML
  // and set it to display the total player and dealer points.
  const playerPointsDisplay = document.querySelectorAll('#player-points');
playerPointsDisplay.innerHTML= totalPlayerPoints;

const dealerPointsDisplay = document.querySelectorAll('#dealer-points');
dealerHandArray.innerHTML= totalDealerPoints;

// now we will code for busts (player or dealer score >21points);
if (totalDealerPoints||totalPlayerPoints >21){
    messages.innerHTML= "YOU BUST";
}
let messages = document.querySelectorAll('#messages');

//the following code will mean that when we hit the stand button, only the dealer gets card
standButton.addEventListener('click',() =>{
    playerHandArray.splice(playerHandArray.length);
    dealerHandArray.keys(pointValue > 17);

})
if (totalPlayerPoints>totalDealerPoints){
messages.innerHTML= "Player WINS"
}
else if (totalDealerPoints>totalPlayerPoints){
    messages.innerHTML="Dealer WINS"
}
else {null}

let DivForResetButton = document.createElement("div");
let ForresetButton = DivForresetButton.createElement("imput","type='reset<p>reset<p>value='reset");
let ForresetButtonClass = ForresetButton.setAttribute("class=resetButton");
ForresetButton.addEventListener("on click",()=>{
document.querySelectorAll().innerHTML=""
})



