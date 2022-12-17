import {imagesArr} from "./images.js";

document.addEventListener('DOMContentLoaded', () => {

// Variables
let score = 0
let chosenCards = [];
let chosenCardsId = [];
let cardsFound = [];

// Elements
let appendFinalResult = document.getElementById("result");
let appendScore = document.getElementById("score");
let appendCardsCont = document.getElementById("cards-con");

// Randomizer
imagesArr.sort( () => 0.5 - Math.random());
const setCards = () => {
    // Lösung mit map
    // imagesArr.map( (data, index) => {
    //     let card = document.createElement('img');
    //     card.setAttribute('src', './assets/cover.jpg');
    //     card.setAttribute('data-id', index);
    //     card.addEventListener('click', chooseCard);
    //     card.setAttribute('class', "card");
        
    //     appendCardsCont.appendChild(card)
    // })

    // Lösung mit for schleife
    for(let i = 0; i < imagesArr.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src', './assets/cover.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', chooseCard);
        card.setAttribute('class', "card");
        
        appendCardsCont.appendChild(card)
    }
}

function matchFunc() {
    let cards = document.querySelectorAll('img');

    const optionOneId = chosenCardsId[0];
    const optionTwoId = chosenCardsId[1];

    //name check of the 2 chosen images 
    if(chosenCards[0] === chosenCards[1]){
        alert('You found a match');
        cards[optionOneId].setAttribute('src', './assets/blanc.jpg');
        cards[optionOneId].removeEventListener('click', chooseCard);

        cards[optionTwoId].setAttribute('src', './assets/blanc.jpg');
        cards[optionTwoId].removeEventListener('click', chooseCard);
        cardsFound.push(chosenCards);
    } else {
        cards[optionOneId].setAttribute('src', './assets/cover.jpg');
        cards[optionTwoId].setAttribute('src', './assets/cover.jpg');
        alert('Sorry, try again!');
    }
    chosenCards = [];
    chosenCardsId = [];

    score = cardsFound.length;
    appendScore.innerText = score;
    // if all found
    if(cardsFound.length === imagesArr.length/2){
        appendFinalResult.innerHTML = "Congratulations! You found them all.";
    }
}

// it cant be an arrow function
function chooseCard() {
    let cardId = this.getAttribute('data-id');

    chosenCards.push(imagesArr[cardId].name);

    chosenCardsId.push(cardId);

    this.setAttribute('src', imagesArr[cardId].src)
    
    if(chosenCards.length === 2){
        setTimeout(matchFunc, 500);
    }
};

setCards();

});