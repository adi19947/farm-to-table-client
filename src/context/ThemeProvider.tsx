import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

interface ThemeContextValue {
  isDark: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setDark] = useState(false);

  const toggleDarkMode = useCallback(() => {
    setDark((prev) => !prev);
  }, [setDark]);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  const value = useMemo(
    () => ({ isDark, toggleDarkMode }),
    [isDark, toggleDarkMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
}

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
