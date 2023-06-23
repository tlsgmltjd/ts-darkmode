export const THEME = {
  white: {
    backgroundColor: "##F8F9FA",
    HeaderColor: "#F8F9FA",
    color: "black",
    boxShadow: "0px 0px 20px 2px rgba(0, 0, 0, 0.1)",
  },
  black: {
    backgroundColor: "#121212",
    HeaderColor: "#1E1E1E",
    color: "white",
    boxShadow: "0px 0px 20px 2px rgba(255, 255, 255, 0.1)",
  },
};

export type ThemeType = typeof THEME;
