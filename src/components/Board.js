/*
- Board
  - Props
    - board
    - make a move
  - Render
    - Squares - 1 for each item in `squares` array, arranged into a grid
*/

import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <div className="grid-container">
      {squares.map((square) => {
        return <Square value={square} />;
      })}
    </div>
  );
}

export default Board;
