import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import ThemeContext from './context/ThemeContext';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeContext.Provider value={toggleTheme}>
        <Router>
          <Routes />
        </Router>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default App;
