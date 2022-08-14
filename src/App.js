import "./App.css";
import React, { createContext, useState } from "react";
///// components
import RightSide from "./components/RightSide";
import Middle from "./components/Middle";
import LeftSide from "./components/LeftSide";

export const ThemeContext = createContext();

function App() {
  const [isDark, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((isDark) => !isDark);
  };

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDark,
      }}
    >
      <div className={`mainApp ${isDark ? "dark" : ""}`}>
        <RightSide />
        <Middle />
        <LeftSide />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
