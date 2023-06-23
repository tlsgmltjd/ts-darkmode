import { useContext } from "react";
import * as S from "./style";
import { ThemeContext } from "../../styles/ThemeContext";

const MainPage = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <S.MainContainer>
      <S.Header>Header</S.Header>
      <S.Content>Content</S.Content>
      <S.Footer>
        Footer
        <S.ThemeChangeButton
          onClick={() => {
            themeContext?.handleSelectChange();
          }}
        >
          {themeContext?.theme == "white" ? "🌝" : "🌚"}
        </S.ThemeChangeButton>
      </S.Footer>
    </S.MainContainer>
  );
};

export default MainPage;
