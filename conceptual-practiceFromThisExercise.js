//create a funtion to do this: 
// When the "Deal" button is clicked, deal 4 times. Once to the player, once to the dealer, then the player and then to the dealer.
Math.random() // use this to random generate. in this instance i randomly made a number to be
// the iterator in the index of deck. 

// list of all functins in my blackjack game:
function addCardToHand (pathToCardImg,receiver) { // creating the function ( executable code block)
    const cardImg = document.createElement("img");
    cardImg.setAttribute('src',pathToCardImg);
    receiver.append(cardImg);
}

function randomCardTobeRemovedFromDeck (array1,array2){
    const randomCardTobeRemovedFromDeck =deck.pop(Math.random()); // assigning that card to a var.
    const randomCardTobeRemovedFromDeck2 = deck.pop(Math.random); // my second random card.
    array1.push(randomCardTobeRemovedFromDeck); // pushing that card into player hand array
      console.log(playerHandArray);// so we can see the card objct in console
    array2.push(randomCardTobeRemovedFromDeck2)
  }


  function randomDeckIntoHands (){
    playerHand.append(playerHandArray)
    dealerHand.append(dealerHandArray)
  }



    randomCardTobeRemovedFromDeck(playerHandArray,dealerHandArray)
  console.log(playerHandArray);
  randomCardTobeRemovedFromDeck(playerHandArray,dealerHandArray)

  addCardToHand(playerHandArray);

  // addCardToHand(`./images/${card.rank}_of_diamonds.png`,playerHand);
  // randomCardTobeRemovedFromDeck(playerHandArray,dealerHandArray)
// 
  // addCardToHand("./images/10_of_hearts.png",dealerHand);
  randomCardTobeRemovedFromDeck(playerHandArray,dealerHandArray)
  
  // addCardToHand('./images/10_of_spades.png',playerHand);
  // const cardImg3 = document.createElement("img");
  // cardImg3.setAttribute('src','./images/10_of_spades.png');
  // playerHand.append(cardImg3);

  // addCardToHand("./images/10_of_diamonds.png",dealerHand);
  // const cardImg4 = document.createElement("img");
  // cardImg4.setAttribute('src',"./images/10_of_diamonds.png");
  // dealerHand.append(cardImg4);

  cardImg.setAttribute('src', `./images/${arrayOfCards[0].rank}_of_${arrayOfCards[0].suit}.png`);
// ^^^^^^^^^^^^^^^^^^ what this accomplishes is : pulls a file path that leads into an immage from the images folder in the directory.
// cont: sets it as the source. gets that source and sets it as teh attribute of CardImg. now 
// cont: CardImg is a a var that points too...



function getCardImage (playerHandArray){
    for (i=0; i<playerHandArray.length; i++){



        //         const cardImg = document.createElement("img");
//   cardImg.setAttribute('src', `./images/${arrayOfCards[0].rank}_of_${arrayOfCards[0].suit}.png`);

//                                 //what is feeding array of cards?//
    }
}

function initialDeal (playerHandArray,dealerHandArray){
    for (let i=0;i<2;i++) {
      var randomNumber1 = Math.floor(Math.random()*deck.length);
      var randomNumber2 = Math.floor(Math.random()*(deck.length-1));
      playerHandArray.push(deck.splice(randomNumber1,1)[0]);
      dealerHandArray.push(deck.splice(randomNumber2,1)[0]);
    }}


    // other version of initialDeal
    // playerHandArray.push(deck.pop(Math.random()));
    // dealerHandArray.push(deck.pop(Math.random()));


    // !!!!! dinushka also explained how he will comment what he intends to do witha function and 
    // then just write that. he will write what the function does, what it takes in as parameters thats it. 