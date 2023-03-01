import React from "react";

const NewGameButton = ({ newGame }) => {
  return (
    <div className="new-game">
      <button onClick={newGame}>Nowa Gra</button>
    </div>
  );
};

export default NewGameButton;
