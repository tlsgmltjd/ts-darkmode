import { styled } from "styled-components";

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.HeaderColor};
  color: ${({ theme }) => theme.color};
`;

export const Content = styled.main`
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.color};
`;

export const Footer = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.HeaderColor};
  color: ${({ theme }) => theme.color};
`;

export const ThemeChangeButton = styled.button`
  position: absolute;
  right: 30px;
  width: 50px;
  height: 50px;
  border: 1px solid #dee2e6;
  border-radius: 9px;
  transition: all 0.3s;

  background-color: ${({ theme }) => theme.HeaderColor};
  color: ${({ theme }) => theme.color};
  box-shadow: ${({ theme }) => theme.boxShadow};

  &:hover {
    scale: 1.1;
    transition: all 0.3s;
  }
`;
