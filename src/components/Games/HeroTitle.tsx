import { GameQuery } from "../../App";

interface Props {
  gameQuery: GameQuery;
}

const HeroTitle = ({ gameQuery }: Props) => {
  const title = `
    ${gameQuery.platform?.name || ""}
    ${gameQuery.genre?.name || ""}
    Games
  `;

  return <h1 className="px-3 pb-md-4 pb-2">{title}</h1>;
};

export default HeroTitle;
