import {imagesArr} from "./images.js";

// Variables
let score = 0

// Elements
let appendScore = document.getElementById("score");
let appendCardsCont = document.getElementById("cards-con");

const setCards = () => {
    imagesArr.map( (data) => {
        let card = document.createElement('img');
        card.setAttribute('src', './assets/blanc.jpg');
        card.setAttribute('id', data.id);
        card.setAttribute('class', "card");
        card.addEventListener('click', chooseCard);
        
        appendCardsCont.appendChild(card)
    })
}

const chooseCard = () => {
    let cardId = this.getAttribute('id');
    console.log(cardId);
};

setCards()