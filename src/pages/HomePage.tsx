import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import GenreList from '../components/Filters/GenreFilter';
import PlatformList from '../components/Filters/PlatformFilter';
import SortFilter from '../components/Filters/SortFilter';
import GamesContainer from '../components/Games/GamesContainer';
import HeroTitle from '../components/Games/HeroTitle';
import Platform from "../entities/Platform";
import Genre from "../entities/Genre";
import Navbar from '../components/Header/Navbar';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const HomePage = () => {
  const [gameQeury, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  return (
    <div className="container">
      <Navbar onSearch={(searchText) => setGameQuery({ ...gameQeury, searchText })} />
      <div className="row">
        {!isTabletOrMobile && (
          <div className="sidebar col-md-2 col-12 p-0">
            <GenreList
              selectedGenre={gameQeury.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQeury, genre })}
            />
          </div>
        )}
        <div className="main col-md-10 col-12 p-0">
          <HeroTitle gameQuery={gameQeury} />
          <div className="px-3 pb-3 d-flex gap-3 flex-md-row flex-column">
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
  )
}

export default HomePage