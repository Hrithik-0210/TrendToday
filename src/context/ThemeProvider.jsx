import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{ theme: isDark ? "dark" : "light", toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
