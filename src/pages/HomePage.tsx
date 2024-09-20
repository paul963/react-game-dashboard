import { useMediaQuery } from 'react-responsive';
import GenreList from '../components/Filters/GenreFilter';
import PlatformList from '../components/Filters/PlatformFilter';
import SortFilter from '../components/Filters/SortFilter';
import GamesContainer from '../components/Games/GamesContainer';
import HeroTitle from '../components/Games/HeroTitle';
import Platform from "../entities/Platform";
import Genre from "../entities/Genre";
import Navbar from '../components/Header/Navbar';
import { useOutletContext } from 'react-router-dom';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const HomePage = () => {
  const { gameQuery, setGameQuery } = useOutletContext<{ gameQuery: GameQuery; setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>> }>();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  return (
    <div className="container">
      <div className="row">
        {!isTabletOrMobile && (
          <div className="sidebar col-md-2 col-12 p-0">
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </div>
        )}
        <div className="main col-md-10 col-12 p-0">
          <HeroTitle gameQuery={gameQuery} />
          <div className="px-3 pb-3 d-flex gap-3 flex-md-row flex-column">
            {isTabletOrMobile && (
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            )}
            <PlatformList
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortFilter
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
          <GamesContainer gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  )
}

export default HomePage