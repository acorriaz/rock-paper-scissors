// Pseudocode
// This Programs will show winner in 5 round rock paper scissors game (in console)

// let roundCounter
// let playerCounter
// let computerCounter

// get input from player
// get input from computer with random math and change number to answer

// function to playRound of rock paper scissors

//   update playerInput
//   update computerInput

//   roundCounter++

//   if draw
//     show what you draw
//       else if win
//         counter++
//         show what you win
//           else
//             show what you lose

// make function to playRound 5 times
//   loop function playRound 5 times
//   if 
//     playerCounter > computerCounter player win
//     else if playerCounter = computerCounter draw
//     else computer win
//   reset counter

let roundCounter = 0;
let playerCounter = 0;
let computerCounter = 0;

const getPlayerSelection = (n) => {
  n = prompt("What will you choose Rock, Paper, Scissors").toLowerCase();
  return n;
};

const getComputerSelection = (choice) => {
  choice = Math.floor(Math.random() * 3 + 1);
  switch (choice) {
    case 1:
      choice = "rock";
      return choice;
    case 2:
      choice = "paper";
      return choice;
    case 3:
      choice = "scissors";
      return choice;
  }
};
