import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  page?: 'dashboard' | 'import';
}

const Header: React.FC<HeaderProps> = ({
  size = 'large',
  page = 'dashboard',
}: HeaderProps) => (
  <Container size={size} page={page}>
    <header>
      <img src={Logo} alt="GoFinances" />
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

export default Header;
