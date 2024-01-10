import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Platform } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";
import style from "./PlatformFilter.module.scss";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformList = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const [listVisibility, setListVisibility] = useState(false);

  const toggleList = () => {
    setListVisibility(!listVisibility);
  };

  if (error) return null;

  return (
    <div className={`position-relative ${style.dropdown}`}>
      <button
        className={`px-3 py-2 bg-dark-subtle d-flex gap-2 align-items-center border-0 rounded-2 ${style.dropdown_toggle}`}
        onClick={toggleList}
      >
        {selectedPlatform?.name || "Platforms"}
        <IoChevronDown />
      </button>
      <div
        className={`position-absolute mt-1 bg-body-secondary rounded-2 ${
          style.dropdown_list
        } ${listVisibility ? style.open : ""}`}
        onClick={() => toggleList()}
      >
        {data.map((platform) => (
          <div
            key={platform.id}
            className={`px-3 py-2 bg-body-secondary ${style.dropdown_list_item}`}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlatformList;
