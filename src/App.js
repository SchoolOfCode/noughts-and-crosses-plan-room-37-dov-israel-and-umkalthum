import React, { useState } from "react";
import Board from "./components/Board";

function App() {
  const [squares, setSquares] = useState([null, "X", null, "O", null, null, null, "O", null]);

  function onClick(index) {
    // check if the index is null then update `squares` with setSquares to X or O at appropriate index
    // depending on the move that was done before (we'll need some sort of history tracking)
    let squaresCopy = [...squares];
    squaresCopy[index] = 'X';
    setSquares(squaresCopy);
  }

  return (
    <div className="App">
      <h1>Play our tick tack toe's, woo!</h1>
      <Board squares={squares} onClick={onClick}/>
      <p>DEBUG: {squares}</p>
    </div>
  );
}

export default App;
