function whoWon(player1, player2) {
  if (player1 === player2) {
    return "Draw!";
  } else if (player1 === "rock" && player2 === "paper") {
    return "Player 2 wins!";
  } else if (player1 === "paper" && player2 === "scissors") {
    return "Player 2 wins!";
  } else if (player1 === "scissors" && player2 === "rock") {
    // Corrected the space after "rock"
    return "Player 2 wins!";
  } else {
    return "Player 1 wins!";
  }
}
module.exports = { whoWon };
