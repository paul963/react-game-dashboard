import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  
  console.log(game);
  console.log(slug);

  if (error || !game) throw error;

  return (
    <div className="container">
      <div className="row">
        {isLoading && (
          <div className="text-center">
            <div className="spinner-grow text-secondary"></div>
          </div>
        )}
        <div className="col-12">
          <h1>{game.name}</h1>
          <p>{game.description_raw}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetailPage;
