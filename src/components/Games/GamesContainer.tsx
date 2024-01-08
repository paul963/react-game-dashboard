import useGames from "../../hooks/useGames";
import GameItem from "./GameItem";
import GameItemLoading from "./GameItemLoading";

const GamesContainer = () => {
  const { games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <p>{error}</p>}

      <div className="container">
        <div className="row">
          {isLoading &&
            skeletons.map((skeleton) => <GameItemLoading key={skeleton} />)}
            
          {games.map((game) => (
            <GameItem key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GamesContainer;
