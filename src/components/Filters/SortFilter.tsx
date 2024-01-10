import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import style from "./SortFilter.module.scss";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortFilter = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Realease data" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];
  const currentSort = sortOrders.find(order => order.value === sortOrder);
  const [listVisibility, setListVisibility] = useState(false);

  const toggleList = () => {
    setListVisibility(!listVisibility);
  };

  return (
    <div className={`position-relative ${style.dropdown}`}>
      <button
        className={`px-3 py-2 bg-dark-subtle d-flex gap-2 align-items-center border-0 rounded-2 ${style.dropdown_toggle}`}
        onClick={toggleList}
      >
        Order by: {currentSort?.label || "Relevance"}
        <IoChevronDown />
      </button>
      <div
        className={`position-absolute mt-1 bg-body-secondary rounded-2 ${
          style.dropdown_list
        } ${listVisibility ? style.open : ""}`}
        onClick={() => {
          toggleList();
        }}
      >
        {sortOrders.map((sortItem) => (
          <button
            key={sortItem.value}
            value={sortItem.value}
            className={`w-100 px-3 py-2 bg-body-secondary border-0 text-start ${style.dropdown_list_item}`}
            onClick={() => onSelectSortOrder(sortItem.value)}
          >
            {sortItem.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortFilter;
