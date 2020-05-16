import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      blue: string;
      orange: string;
      green: string;
      red: string;
      mainShape: string;
      titles: string;
      texts: string;
      background: string;
      card: string;
      total: string;
    };
  }
}
