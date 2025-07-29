import { Children, createContext, useState, useContext } from 'react';
import './App.css'
import CounterCustomHook from './components/CounterCustomHook/CounterCustomHook';
import CounterMemo from './components/CounterMemo/CounterMemo';
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme}
      style={{ backgroundColor: theme === "light" ? "white" : "black",
      color: theme === "light" ? "black" : "white" }}>
      Toggle Theme ({theme})
    </button>
  )
}

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
      <CounterCustomHook />
      <CounterMemo />
    </>
  )
}

export default App