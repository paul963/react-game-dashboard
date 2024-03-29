import { useMediaQuery } from "react-responsive";
import reactLogo from "../../assets/react.svg";
import SearchFilter from "../Filters/SearchFilter";
import ThemeColorSwitcher from "../ThemeColorSwitcher";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="row px-3">
      <div className="col-md-2 col-6">
        <img src={reactLogo} className="p-1 rounded-1 shadow" />
      </div>
      <div className="col-md-10 col-6 d-flex align-items-center justify-md-content-between justify-content-end gap-5">
        {!isTabletOrMobile && <SearchFilter onSearch={onSearch} />}
        <ThemeColorSwitcher />
      </div>
      {isTabletOrMobile && (
        <div className="col-12 mt-3">
          <SearchFilter onSearch={onSearch} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
