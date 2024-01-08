import { useEffect, useState } from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeColorSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleThemeColor = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className="d-flex align-items-center gap-1" onClick={toggleThemeColor}>
      {darkMode ? (
        <>
          <MdLightMode size={"25px"} />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <MdDarkMode size={"25px"} />
          <span>Dark Mode</span>
        </>
      )}
    </div>
  );
};

export default ThemeColorSwitcher;
