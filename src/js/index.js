/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  myFunction();
};

const myFunction = () => {
  let suits = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let randomSuit = suits[Math.floor(Math.random() * suits.length)];

  if (randomSuit === "&#9830" || randomSuit === "&#9829") {
    document.querySelector(".card").style.color = "red";
  }

  document.querySelector(".top").innerHTML = randomSuit;
  document.querySelector(".middle").innerHTML = randomNumber;
  document.querySelector(".bottom").innerHTML = randomSuit;
};
