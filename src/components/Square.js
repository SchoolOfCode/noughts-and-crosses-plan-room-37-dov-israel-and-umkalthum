/*
- Square
  - Props
    - make a move
  - Render
    - `"", X, or O`
*/
import React from "react";

function Square({ value, onClick }) {
  return <button onClick={onClick}>{value}</button>;
}

export default Square;
