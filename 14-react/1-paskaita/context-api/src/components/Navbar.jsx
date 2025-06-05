import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContextProvider"


const NavBar = () => {
    const themeContextValue = useContext(ThemeContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext).state;
    const theme = isLightTheme ? light : dark;
    console.log(themeContextValue);
    return (
        <nav style={{backgroundColor: theme.ui, color: theme.syntax}}>
            <h2>context app</h2>
            <ul>
                <li>home</li>
                <li>about</li>
                <li>contacts</li>
            </ul>
        </nav>
    )
}

export default NavBar