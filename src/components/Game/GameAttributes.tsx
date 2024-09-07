import { Game } from "../../entities/Game";
import Attributes from "./Attributes";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <div className="game_attributes">
      <hr className="m-0" />
      <Attributes term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <span key={platform.id}>{platform.name}</span>
        ))}
      </Attributes>
      <hr className="m-0" />
      <Attributes term="Genres">
        {game.genres?.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </Attributes>
      <hr className="m-0" />
      <Attributes term="Publishers">
        {game.publishers?.map((publisher) => (
          <span key={publisher.id}>{publisher.name}</span>
        ))}
      </Attributes>
    </div>
  );
};

export default GameAttributes;
