import { useState } from "react";
import { useParams } from "react-router-dom";
import Attributes from "../components/Game/Attributes";
import Gallery from "../components/Game/Gallery";
import GameAttributes from "../components/Game/GameAttributes";
import Trailer from "../components/Game/Trailer";
import Score from "../components/Games/Score";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, error } = useGame(slug!);

  const [isExpanded, setIsExpanded] = useState(false);

  if (error) throw error;

  return (
    <>
      {game && (
        <div className="container my-3">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="game-title pb-4 d-flex flex-md-row flex-column align-items-md-center justify-content-between">
                <h1>{game.name}</h1>
                <Attributes term="Metascore">
                  <Score score={game.metacritic} />
                </Attributes>
              </div>
              <div className="game-description pb-5">
                <p>
                  {isExpanded
                    ? game.description_raw
                    : `${game.description_raw.substring(0, 700)}...`}
                </p>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
              <GameAttributes game={game} />
            </div>
            <div className="col-12 col-md-6 mt-md-0 mt-4">
              <Gallery gameId={game.id} />
            </div>
            <div className="col-12 mt-4">
              <Trailer gameId={game.id} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameDetailPage;
