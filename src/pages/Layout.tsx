import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Platform from "../entities/Platform";
import Genre from "../entities/Genre";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const Layout = () => {
  const [gameQeury, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Navbar onSearch={(searchText) => setGameQuery({ ...gameQeury, searchText })} />
      <Outlet />
    </>
  );
};

export default Layout;
