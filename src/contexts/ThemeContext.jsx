import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  let titleColorClass;
  if (isDark) titleColorClass = "text-white";

  const value = { isDark, setIsDark, toggleTheme, titleColorClass };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const useThemeContext = () => useContext(ThemeContext);

export { useThemeContext, ThemeContextProvider };
