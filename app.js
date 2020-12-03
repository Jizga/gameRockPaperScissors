const cards = ["rock", "paper", "scissors"];

let player = null;
let computer = null;
let contadorP = 0;
let contadorC = 0;

function computerElection() {
  document.getElementById("rockC").classList.remove("chosen");
  document.getElementById("paperC").classList.remove("chosen");
  document.getElementById("scissorsC").classList.remove("chosen");

  computer = cards[Math.floor(Math.random() * (3 - 0)) + 0];

  document.getElementById(computer + "C").classList.add("chosen");
}

function playerElection(election) {
  document.getElementById("rock").classList.remove("chosen");
  document.getElementById("paper").classList.remove("chosen");
  document.getElementById("scissors").classList.remove("chosen");
  document.getElementById("bomb").classList.remove("chosen");

  if (election.id === "rock") {
    player = "rock";
  } else if (election.id === "paper") {
    player = "paper";
  } else if (election.id === "scissors") {
    player = "scissors";
  } else if (election.id === "bomb") {
    player = "bomb";
  }

  document.getElementById(election.id).classList.add("chosen");

  computerElection();
  game();
}

function game() {
  let msg;

  if (player === computer) {
    msg = "The game is a tie 😲";
  } else if (player === "rock" && computer === "paper") {
    msg = "Oh, You lost 😢";
    contadorC++;
  } else if (player === "rock" && computer === "scissors") {
    msg = "You win 🥳!!";
    contadorP++;
  } else if (player === "paper" && computer === "rock") {
    msg = "You win 🥳!!";
    contadorP++;
  } else if (player === "paper" && computer === "scissors") {
    msg = "Oh, You lost 😢";
    contadorC++;
  } else if (player === "scissors" && computer === "rock") {
    msg = "Oh, You lost 😢";
    contadorC++;
  } else if (player === "scissors" && computer === "paper") {
    msg = "You win 🥳!!";
    contadorP++;
  } else if (player === "bomb") {
    msg = "You cheated, but ... you win! 😎";
    contadorP++;
  }

  if (contadorP < 0) {
    contadorP = 0;
  } else if (contadorC < 0) {
    contadorC = 0;
  }

  document.getElementById("messageGame").innerHTML = msg;
  document.getElementById("contadorP").innerHTML = contadorP;
  document.getElementById("contadorC").innerHTML = contadorC;
  console.log(contador);
}
