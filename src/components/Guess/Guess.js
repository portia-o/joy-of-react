import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ thisWord, answer }) {
  const result = checkGuess(thisWord, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <span
          key={num}
          className={result ? `${result[num].status} cell` : "cell"}
        >
          {thisWord ? thisWord[num] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
