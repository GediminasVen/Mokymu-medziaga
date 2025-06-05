import { ThemeContext } from "../contexts/ThemeContextProvider";
import { useContext } from "react";

const ThemeToggle = () => {
  const {toggleTheme} = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>change</button>
  )
}

export default ThemeToggle;
