import { createContext } from 'react';

interface ThemeContextData {
  (): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export default ThemeContext;
