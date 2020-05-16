import React, { useContext } from 'react';

import { ThemeContext as titleThemeContext } from 'styled-components';

import Switch from 'react-switch';

import { FiSun, FiMoon } from 'react-icons/fi';

import { NavLink } from 'react-router-dom';

import ThemeContext from '../../context/ThemeContext';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const toggleTheme = useContext(ThemeContext);
  const { title } = useContext(titleThemeContext);

  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />

        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          uncheckedIcon={<FiMoon size={22} className="moon" />}
          checkedIcon={<FiSun size={22} className="sun" />}
          height={30}
          width={75}
          handleDiameter={35}
          onColor="#5636D3"
          offColor="#1B2E47"
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        />

        <nav>
          <NavLink to="/" exact activeClassName="selected">
            Listagem
          </NavLink>
          <NavLink to="/import" activeClassName="selected">
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
