import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import useGenres from "../../hooks/useGenres";
import Genre from "../../entities/Genre";
import style from "./GenreFilter.module.scss";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const [listVisibility, setListVisibility] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleList = () => {
    setListVisibility(!listVisibility);
  };

  if (error) return null;

  return (
    <>
      {!isTabletOrMobile && (
        <>
          <h4 className="px-4">Genres</h4>
          <ul className={`list-group rounded-2 ${style.genre}`}>
            {isLoading && (
              <div className="spinner-grow text-secondary" role="status"></div>
            )}

            {data?.results.map((genre) => (
              <li
                key={genre.id}
                onClick={() => onSelectGenre(genre)}
                className={`list-group-item border-0 rounded-2 ${
                  style.genre_item
                } ${genre.id === selectedGenre?.id && "bg-dark-subtle"}`}
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={genre.image_background}
                    width={32}
                    height={32}
                    className="rounded-2"
                  />
                  <span>{genre.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {isTabletOrMobile && (
        <div className={`position-relative ${style.dropdown}`}>
          <button
            className={`w-100 px-3 py-2 bg-dark-subtle d-flex justify-content-between gap-2 align-items-center border-0 rounded-2 ${style.dropdown_toggle}`}
            onClick={toggleList}
          >
            {selectedGenre?.name || "Genre"}
            <IoChevronDown />
          </button>
          <div
            className={`position-absolute mt-1 bg-body-secondary rounded-2 ${
              style.dropdown_list
            } ${listVisibility ? style.open : ""}`}
            onClick={() => toggleList()}
          >
            <ul className={`list-group rounded-2 ${style.genre}`}>
              {isLoading && (
                <div
                  className="spinner-grow text-secondary"
                  role="status"
                ></div>
              )}

              {data?.results.map((genre) => (
                <li
                  key={genre.id}
                  onClick={() => onSelectGenre(genre)}
                  className={`list-group-item px-0 bg-transparent border-0 rounded-2 ${style.genre_item}`}
                >
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={genre.image_background}
                      width={32}
                      height={32}
                      className="rounded-2"
                    />
                    <span>{genre.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default GenreList;
