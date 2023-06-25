import { useTheme } from "styled-components";
import * as S from "./style";

const MainPage = ({ onToggle }: { onToggle: VoidFunction }) => {
  const theme = useTheme();

  return (
    <S.MainContainer>
      <S.Header>Header</S.Header>
      <S.Content>Content</S.Content>
      <S.Footer>
        Footer
        <S.ThemeChangeButton onClick={onToggle}>
          {theme.color == "black" ? "🌝" : "🌚"}
        </S.ThemeChangeButton>
      </S.Footer>
    </S.MainContainer>
  );
};

export default MainPage;
