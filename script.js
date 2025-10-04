"use strict"

// console.log(document.getElementsByClassName("message"));
// console.log(document.querySelector("p"));
// console.log(document.querySelectorAll("p"));
// console.log(document.querySelector(".message"));
// console.log(document.querySelector("#message"));
// console.log(document.getElementById("demo"));

// const result = document.querySelector(".message");
// const test = document.querySelector(".test");

// console.log(result.innerHTML);
// console.log(test.innerHTML);

// result.textContent = "Hi";
// const input = +document.querySelector(".guess").value
// console.log(typeof input);

const checkBtn = document.querySelector(".check");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreLabel = document.querySelector(".score");
const highScoreEle = document.querySelector(".highscore");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


checkBtn.addEventListener("click", function () {
  const userInput = +document.querySelector(".guess").value;

  if (!userInput) {
    message.textContent = "No Number"
    return;
  }

  if (userInput === secretNumber) {
    message.textContent = "Correct Number";
    number.textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347"
    number.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreEle.textContent = highScore;
    }
  } else {
    if (score > 1) {
      if (userInput > secretNumber) {
        message.textContent = "Too High"
        score--;
        scoreLabel.textContent = score;
      } else if (userInput < secretNumber) {
        message.textContent = "Too Low"
        score--;
        scoreLabel.textContent = score;
      }
    } else {
      message.textContent = "You lost the game";
      scoreLabel.textContent = 0;
    }
  }
})

const againBtn = document.querySelector(".again");

againBtn.addEventListener("click", function () {
  score = 20;
  scoreLabel.textContent = score;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = "Start guessing...";
  number.textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
});
