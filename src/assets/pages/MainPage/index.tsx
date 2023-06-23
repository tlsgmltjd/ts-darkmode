import * as S from "./style";

const MainPage = () => {
  return (
    <S.MainContainer>
      <S.Header>Header</S.Header>
      <S.Content>Content</S.Content>
      <S.Footer>
        Footer
        <S.ThemeChangeButton>🌝</S.ThemeChangeButton>
      </S.Footer>
    </S.MainContainer>
  );
};

export default MainPage;
