//selectors
const rockButton = document.getElementById("rock-button");
const ticButton = document.getElementById("tic-button");
const connectButton = document.getElementById("connect-button");
const gameContainer = document.getElementById("game-container");
const gameTitle = document.getElementById("game-title");
const gameScreen = document.getElementById("game-screen");

// game functions

const playRock = () => {
  console.log("play rock");
};

const playTic = () => {
  console.log("play tic");
};

const playConnect = () => {
  console.log("play connect");
};

// helper functions

//event listeners

rockButton.addEventListener("click", playRock);
ticButton.addEventListener("click", playTic);
connectButton.addEventListener("click", playConnect);
