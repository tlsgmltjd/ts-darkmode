import React, { useEffect, useState } from "react";
import { ThemeType, THEME } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyle";
import { DefaultTheme, ThemeProvider } from "styled-components";
import * as P from "./pages";

const App: React.FC = () => {
  const [theme, setTheme] = useState<keyof ThemeType>("white");
  const [themeStyled, setThemeStyled] = useState<DefaultTheme>(THEME[theme]);

  const handleSelectChange = () => {
    setTheme(theme == "white" ? "black" : "white");
  };

  useEffect(() => {
    setThemeStyled(THEME[theme]);
  }, [theme]);

  return (
    <ThemeProvider theme={themeStyled}>
      <GlobalStyle />
      <P.MainPage onToggle={handleSelectChange} />
    </ThemeProvider>
  );
};

export default App;
