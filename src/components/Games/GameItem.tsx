import { Game } from "../../entities/Game";
import PlatformIconList from "./PlatformIconList";
import Score from "./Score";
import style from "./GameItem.module.scss";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameItem = ({ game }: Props) => {
  return (
    <div className={`col-xl-4 col-md-6 col-12 p-3 ${style.game_item}`}>
      <div className="bg-dark-subtle pb-5 rounded-2 overflow-hidden">
        <div  className="overflow-hidden">
        <Link to={"/game/" + game.slug}>
            <img
              src={
                game.background_image
                  ? game.background_image
                  : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              }
              className={`w-100 ${style.game_item_img}`}
            />
          </Link>
        </div>
        <div className="px-3 pt-3">
          <div className="mb-3 d-flex align-items-start justify-content-between gap-3">
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <Score score={game.metacritic} />
          </div>
          <h4 className={style.game_item_title}>
            <Link to={"/game/" + game.slug}>{game.name}</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default GameItem;
