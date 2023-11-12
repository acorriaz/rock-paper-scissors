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
//       else if
//     playerCounter = computerCounter draw
//       else
//     computer win
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

function playRound() {
  const playerSelection = getPlayerSelection();
  const computerSelection = getComputerSelection();

  ++roundCounter;
  console.log(`Round count ${roundCounter}`);

  // draw
  if (playerSelection === computerSelection) {
    alert(
      `It a draw you choose "${playerSelection}" computer choose "${computerSelection}"`
    );
    console.log(`Computer win count ${computerCounter}`);
    console.log(`Player win count ${playerCounter}`);
    // player win
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    ++playerCounter;
    console.log(`Computer win count ${computerCounter}`);
    console.log(`Player win count ${playerCounter}`);
    alert(
      `You WIN!!! you choose "${playerSelection}" computer choose "${computerSelection}"`
    );
    // computer win
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    ++computerCounter;
    console.log(`Computer win count ${computerCounter}`);
    console.log(`player win count ${playerCounter}`);
    alert(
      `You Lose :< you choose "${playerSelection}" computer choose "${computerSelection}"`
    );
  } else {
    console.log(`Computer win count ${computerCounter}`);
    console.log(`player win count ${playerCounter}`);
    alert(`I think you type "${playerSelection}", soooo you lost XD`);
  }
}

const game = () => {
  for (i = 0; i < 5; i++) {
    playRound();
  }
  if (playerCounter > computerCounter) {
    alert(`YOU WINNNNNNNN with score ${playerCounter} - ${computerCounter}`);
  } else if (playerCounter === computerCounter) {
    alert(`It's a DRAW with score ${playerCounter} - ${computerCounter}`);
  } else {
    alert(`You Lose :< with score ${playerCounter} - ${computerCounter}`);
  }
  playerCounter = 0;
  computerCounter = 0;
  roundCounter = 0;
};
