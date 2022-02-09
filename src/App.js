import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [XTurn, setXTurn] = useState(true);

  function toggleXTurn() {
    setXTurn(!XTurn);
  }

  function onClick(index) {
    // check if the state is null then update `squares` with setSquares to X or O at appropriate index
    if (XTurn === true) {
      let squaresCopy = [...squares];
      squaresCopy[index] = "X";
      setSquares(squaresCopy);
      toggleXTurn();
    } else {
      let squaresCopy = [...squares];
      squaresCopy[index] = "O";
      setSquares(squaresCopy);
      toggleXTurn();
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
