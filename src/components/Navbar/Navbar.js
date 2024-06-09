import { useState } from "react";
import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle(classes.darkMode, !isDarkMode);
  };

  return (
    <div className={`${classes.navbar} ${isDarkMode ? classes.dark : ''}`}>
      <div className={classes.logo}>Weather App</div>
      <div className={classes.modes}>
        <button onClick={toggleDarkMode}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
