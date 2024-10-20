import React from "react";

function GuessInput({ updateList, gameStatus }) {
  const [guess, setGuess] = React.useState("");

  function handleGuess(e) {
    e.preventDefault();
    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters.");
      setGuess("");
      return;
    }

    updateList(guess);
    setGuess("");
  }

  return (
    <div>
      <form onSubmit={handleGuess} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={gameStatus !== "running"}
          required
          minLength={5}
          maxLength={5}
          id="guess-input"
          value={guess}
          onChange={(e) => {
            setGuess(e.target.value.toUpperCase());
          }}
          type="text"
        />
      </form>
    </div>
  );
}

export default GuessInput;
