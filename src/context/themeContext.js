import { createContext,useContext } from "react";

const themeContext=createContext({
    currentTheme:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

const ThemeProvider=themeContext.Provider

const useTheme=()=>{
    useContext(themeContext)
}

export {useTheme,ThemeProvider,themeContext}