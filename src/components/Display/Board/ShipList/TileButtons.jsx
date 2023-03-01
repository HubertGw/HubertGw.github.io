import React from "react";

const TileButtons = ({ clearTiles, confirmTiles }) => {
  return (
    <div>
      <button onClick={confirmTiles}>Zatwierdź</button>
      <button className="cancel" onClick={clearTiles}>Wyczyść</button>
    </div>
  );
};

export default TileButtons;
