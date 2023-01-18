const cardFuagra = document.getElementById("card-fuagra");
const cardFish = document.getElementById("card-fish");
const cardChicken = document.getElementById("card-chicken");

let EmblemArr = document.querySelectorAll(".emblem-weight");
let BuyTxtArr = document.querySelectorAll("#buy-text");

const buyTxtDef = `<p id="buy-text">Чего сидишь? Порадуй котэ, <a id="buy-link" href="#">купи.</a></p>`;

function soldOut() {
  cardFuagra.classList.add("disabled-card");
  EmblemArr[0].classList.add("emblem-disabled");
  BuyTxtArr[0].innerHTML = "Печалька, с фуа-гра закончился.";
  BuyTxtArr[0].setAttribute("id", "disabled-text");
}

cardFuagra.addEventListener("click", ()=> {
  if(cardFuagra.classList.contains("disabled-card")){
    return
  }else if(!cardFuagra.classList.contains("select-card")) {
  cardFuagra.classList.add("select-card");
  EmblemArr[0].classList.add("emblem-select");
  BuyTxtArr[0].innerHTML = "Печень утки разварная с артишоками.";
  } else {
    cardFuagra.classList.remove("select-card");
    EmblemArr[0].classList.remove("emblem-select");
    BuyTxtArr[0].innerHTML = buyTxtDef;
  }
})

cardFish.addEventListener("click", ()=> {
  if (cardFish.classList.contains("disabled-card")){
    return
  }else if(!cardFish.classList.contains("select-card")) {
    cardFish.classList.add("select-card");
  EmblemArr[1].classList.add("emblem-select");
  BuyTxtArr[1].innerHTML = "Головы щучьи с чесноком да свежайшая сёмгушка.";
  } else {
    cardFish.classList.remove("select-card");
    EmblemArr[1].classList.remove("emblem-select");
    BuyTxtArr[1].innerHTML = buyTxtDef;
  }
})

cardChicken.addEventListener("click", ()=> {
  if (cardFish.classList.contains("disabled-card")){
    return
  }else if(!cardChicken.classList.contains("select-card")) {
  cardChicken.classList.add("select-card");
  EmblemArr[2].classList.add("emblem-select");
  BuyTxtArr[2].innerHTML = "Филе из цыплят с трюфелями в бульоне.";
  } else {
    cardChicken.classList.remove("select-card");
    EmblemArr[2].classList.remove("emblem-select");
    BuyTxtArr[2].innerHTML = buyTxtDef;
  }
})

document.addEventListener("DOMContentLoaded", function() {
  soldOut();
});