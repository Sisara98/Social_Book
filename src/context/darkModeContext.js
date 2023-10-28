import { createContext, useEffect,useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({children}) =>{ //childern is we did protect all components firstly
    const [darkMode,setDarkMode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false //first time user see it lightmood json got boolean
    );

    const toggle = () =>{
        setDarkMode(!darkMode)
    } //toggle mood if opposite of darkMode

    useEffect(() => {
        localStorage.setItem("darkMode",darkMode)
    },[darkMode])  // this step depend on darkmode value it changes local storage will set new value

    return(
        <DarkModeContext.Provider value={{darkMode, toggle}}>
            {children}</DarkModeContext.Provider>
    )

};