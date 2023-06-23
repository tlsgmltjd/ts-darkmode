import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeType, THEME } from "./assets/theme/theme";
import { GlobalStyle } from "./assets/theme/GlobalStyle";
import { DefaultTheme, ThemeProvider } from "styled-components";
import * as P from "./assets/pages";
import { ThemeContext } from "./assets/theme/ThemeContext";

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
      <ThemeContext.Provider value={{ theme, handleSelectChange }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<P.MainPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
