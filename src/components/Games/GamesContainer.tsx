import useGames from "../../hooks/useGames";
import GameItem from "./GameItem";
import GameItemLoading from "./GameItemLoading";
import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesContainer = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if(error) return <p>{error}</p>;

  return (
      <div className="container">
        <div className="row">
          {isLoading
            ? skeletons.map((skeleton) => <GameItemLoading key={skeleton} />)
            : data.map((game) => <GameItem key={game.id} game={game} />)}
        </div>
      </div>
  );
};

export default GamesContainer;
