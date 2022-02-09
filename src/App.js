import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XTurn, setXTurn] = useState(true);

  function toggleXTurn() {
    setXTurn(!XTurn);
  }

  function calculateTheWinner(squaresCopy) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        squaresCopy[a] &&
        squaresCopy[b] === squaresCopy[a] &&
        squaresCopy[c] === squaresCopy[b]
      ) {
        console.log("win");
        return squaresCopy[a];
      }
    }
    console.log("game not finished");
    return null;
  }

  function onClick(index) {
    // check if the state is null then update `squares` with setSquares to X or O at appropriate index
    if (XTurn === true) {
      let squaresCopy = [...squares];
      squaresCopy[index] = "X";
      setSquares(squaresCopy);
      toggleXTurn();
      console.log(calculateTheWinner(squaresCopy));
    } else {
      let squaresCopy = [...squares];
      squaresCopy[index] = "O";
      setSquares(squaresCopy);
      toggleXTurn();
      console.log(calculateTheWinner(squaresCopy));
    }
    // depending on the move that was done before (we'll need some sort of history tracking)
  }

  return (
    <div className="App">
      <h1>Play our tick tack toe's, woo!</h1>
      <Board squares={squares} onClick={onClick} />
      <p>DEBUG: {squares}</p>
    </div>
  );
}

export default App;
