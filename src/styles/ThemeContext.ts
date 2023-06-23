import { createContext } from "react";

type ThemeContextType = {
  theme: string;
  handleSelectChange: Function;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
