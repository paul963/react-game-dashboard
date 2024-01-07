import React from "react";
import useGames from "../hooks/useGames";

import GameItem from "./GameItem";

const GamesContainer = () => {
const {games, error} = useGames();

  return (
    <>
    {error && <p>{error}</p>}

    <div>
      {games.map(game => <GameItem key={game.id} game={game} />)}
    </div>
    </>
  )
};

export default GamesContainer;
