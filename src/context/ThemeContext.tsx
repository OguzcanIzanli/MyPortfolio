import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface ThemeContextInterface {
  theme: boolean;
  setTheme: (theme: boolean) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: true,
  setTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme === "false" ? false : true);

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());
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
