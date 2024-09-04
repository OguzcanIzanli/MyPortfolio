import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

export type ThemeContextInterface = {
  theme: string;
  setTheme: (theme: string) => void;
};

export type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContextInterface>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);
