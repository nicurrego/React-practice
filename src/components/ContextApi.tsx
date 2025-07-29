import { useContext, createContext, useState, JSX } from "react"

type ThemeContextType = {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeButton must be used within a ThemeProvider");
  const { theme, toggleTheme } = context;

  return (
    <button onClick={toggleTheme}>
      Toggle {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

export { ThemeProvider, useTheme, ThemeButton };

