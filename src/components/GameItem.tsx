import React from "react";

import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameItem = ({ game }: Props) => {
  return (
    <div>
      <img src={game.background_image} />
      <div>
        <h4>{game.name}</h4>
      </div>
    </div>
  );
};

export default GameItem;
