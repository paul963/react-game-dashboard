import { Game } from "../../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import style from "./GameItem.module.scss";

interface Props {
  game: Game;
}

const GameItem = ({ game }: Props) => {
  return (
    <div className={`col-md-4 col-12 p-3 ${style.game_item}`}>
      <div className="bg-dark-subtle pb-5 rounded-2 overflow-hidden">
        <img src={game.background_image} className={style.game_item_img} />
        <div className="px-3 pt-3">
          <h4>{game.name}</h4>
          <div className="d-flex align-items-start justify-content-between gap-3">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <Score score={game.metacritic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
