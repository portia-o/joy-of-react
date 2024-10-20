import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import PreviousGuesses from "../PreviousGuesses";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function updateList(guess) {
    const newList = [...guessList, guess];
    setGuessList(newList);

    if (guess === answer) {
      setGameStatus("won");
    } else if (newList.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");
  }
  return (
    <>
      <PreviousGuesses guessList={guessList} answer={answer} />
      <GuessInput updateList={updateList} gameStatus={gameStatus} />
      {gameStatus !== "running" && (
        <Banner
          gameStatus={gameStatus}
          answer={answer}
          numGuesses={guessList.length}
        />
      )}
    </>
  );
}

export default Game;
