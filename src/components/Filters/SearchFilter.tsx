import { useRef } from "react";
import { IoSearch } from "react-icons/io5";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchFilter = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <div className="input-group px-3 py-2 bg-dark-subtle rounded-2">
        <input
          ref={ref}
          className="form-control p-0 bg-dark-subtle border-0 shadow-none"
          placeholder="Search games..."
        />
        <button type="submit" className="p-0 d-flex align-items-center bg-dark-subtle border-0">
          <IoSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchFilter;
