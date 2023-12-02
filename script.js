// Selectors
const rockButton = document.getElementById("rock-button");
const ticButton = document.getElementById("tic-button");
const connectButton = document.getElementById("connect-button");
const gameContainer = document.getElementById("game-container");
const gameTitle = document.getElementById("game-title");
const gameScreen = document.getElementById("game-screen");
const resetButton = document.getElementById("reset-button");

// Reset Game State Function
const resetGameState = () => {
  gameScreen.innerHTML = ""; // Clear the game screen
  // Add any other reset logic here if needed for other games
};

// Game Functions
const playTic = () => {
  resetGameState(); // Reset the game state
  gameTitle.innerHTML = "Tic Tac Toe";
  console.log("play tic");
  gameContainer.style.display = "flex";
  // Setup for Tic Tac Toe game
  // (Your Tic Tac Toe game logic will go here)
};

const playConnect = () => {
  resetGameState(); // Reset the game state
  gameTitle.innerHTML = "Connect Four";
  console.log("play connect");
  gameContainer.style.display = "flex";
  // Setup for Connect Four game
  // (Your Connect Four game logic will go here)
};

const playRock = () => {
  resetGameState(); // Reset the game state
  gameTitle.innerHTML = "Rock Paper Scissors";
  console.log("play Rock");
  gameContainer.style.display = "flex";

  const gameOptions = document.createElement("div");
  const selectRock = document.createElement("button");
  const gameInstruction = document.createElement("p");
  gameInstruction.innerHTML = "Make Your Selection";

  selectRock.innerText = "Rock";
  selectRock.addEventListener("click", () => {
    console.log("rock selected");
  });

  gameOptions.append(selectRock);
  gameScreen.append(gameInstruction, gameOptions);
};

// Clear Game and Hide Game Container
const clearGame = () => {
  gameContainer.style.display = "none"; // Hide the game container
  resetGameState(); // Reset the game state
};

// Event Listeners
rockButton.addEventListener("click", playRock);
ticButton.addEventListener("click", playTic);
connectButton.addEventListener("click", playConnect);
resetButton.addEventListener("click", clearGame);
