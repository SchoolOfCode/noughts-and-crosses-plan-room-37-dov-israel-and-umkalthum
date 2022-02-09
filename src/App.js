// game logic here
import React from "react";
import Board from "./components/Board";

function App() {
  const squares = [null, "X", null, "O", null, null, null, "O", null];

  return (
    <div className="App">
      <h1>Play our tick tack toe's, woo!</h1>
      <Board squares={squares} />
    </div>
  );
}

export default App;
