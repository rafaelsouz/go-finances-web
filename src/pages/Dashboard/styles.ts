import styled from 'styled-components';

interface CardProps {
  total?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.colors.titles};
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: -150px;
`;

export const Card = styled.div`
  &.total {
    background: ${props => props.theme.colors.total};
    color: ${props => props.theme.colors.mainShape};
  }

  background: ${props => props.theme.colors.card};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${props => props.theme.colors.titles};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: ${props => props.theme.colors.texts};
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: ${props => props.theme.colors.card};
      font-size: 16px;
      font-weight: normal;
      color: ${props => props.theme.colors.texts};

      &.title {
        color: ${props => props.theme.colors.titles};
      }

      &.income {
        color: ${props => props.theme.colors.green};
      }

      &.outcome {
        color: ${props => props.theme.colors.red};
      }
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }
  }
`;
