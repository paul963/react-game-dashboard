import { useMediaQuery } from "react-responsive";
import reactLogo from "../../assets/react.svg";
import SearchFilter from "../Filters/SearchFilter";
import ThemeColorSwitcher from "../ThemeColorSwitcher";
import style from "./Navbar.module.scss";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="container py-md-3 pt-2 pb-4">
      <div className="row">
        <div className={`col-12 d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap gap-md-5 gap-3 ${style.navbar}`}>
          <a href="/">
            <img src={reactLogo} className="p-1 rounded-1 shadow" />
          </a>
          <div className={`w-100 mx-md-5 mx-0 ${style.search_container}`}>
            <SearchFilter onSearch={onSearch} />
          </div>
          <ThemeColorSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
