import useGames from "../../hooks/useGames";
import GameItem from "./GameItem";
import GameItemLoading from "./GameItemLoading";
import { GameQuery } from "../../pages/Layout";
// import React from "react";

interface Props {
  gameQuery: GameQuery;
}

const GamesContainer = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    // isFetchingNextPage,
    // fetchNextPage,
    // hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  if (error) return <p>{error.message}</p>;

  return (
    <div className="container mb-5">
      <div className="row">
        {isLoading
          ? skeletons.map((skeleton) => <GameItemLoading key={skeleton} />)
          : data?.results.map((game) => <GameItem key={game.id} game={game} />)}
        {/* : data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameItem key={game.id} game={game} />
              ))}
            </React.Fragment>
          ))} */}
      </div>
      {/* <div className="row">
        <div className="col-12">
          {hasNextPage && (
            <button
              className="px-3 py-2 bg-dark-subtle border-0 rounded-2"
              onClick={() => fetchNextPage()}
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default GamesContainer;
