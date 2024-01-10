import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "./components/Header/Navbar";
import GamesContainer from "./components/Games/GamesContainer";
import PlatformList from "./components/Filters/PlatformFilter";
import GenreList from "./components/Filters/GenreFilter";
import SortFilter from "./components/Filters/SortFilter";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import HeroTitle from "./components/Games/HeroTitle";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQeury, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-3 mb-md-5 mb-4">
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQeury, searchText })
            }
          />
        </div>
      </div>
      <div className="row">
        {!isTabletOrMobile && (
          <div className="sidebar col-md-2 col-12">
            <GenreList
              selectedGenre={gameQeury.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQeury, genre })}
            />
          </div>
        )}
        <div className="main col-md-10 col-12">
          <HeroTitle gameQuery={gameQeury} />
          <div className="px-3 d-flex gap-3 flex-md-row flex-column">
            {isTabletOrMobile && (
              <GenreList
                selectedGenre={gameQeury.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQeury, genre })}
              />
            )}
            <PlatformList
              selectedPlatform={gameQeury.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQeury, platform })
              }
            />
            <SortFilter
              sortOrder={gameQeury.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQeury, sortOrder })
              }
            />
          </div>
          <GamesContainer gameQuery={gameQeury} />
        </div>
      </div>
    </div>
  );
}

export default App;
