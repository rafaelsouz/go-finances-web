import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: ${props => props.theme.colors.blue};
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sun {
      color: #ffea00;
      margin-left: 10px;
      height: 100%;
    }

    .moon {
      color: #fff;
      margin-left: 10px;
      height: 100%;
    }

    nav {
      .selected {
        border-bottom: ${props => props.theme.colors.orange} 2px solid;
        padding-bottom: 10px;
      }
      a {
        color: ${props => props.theme.colors.mainShape};
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
