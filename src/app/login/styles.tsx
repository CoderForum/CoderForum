import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-bottom: 60px;

  // make mobile have a better experience
  @media (max-width: 512px) {
    padding: 0 20px;
  }

  /* use height until page end (navbar at top) */
  height: calc(100vh - 55px);
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  border: 1px solid ${({ theme }) => theme.colors.textSecondary};
  border-radius: 10px;
  padding: 20px;

  > h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  @media (max-width: 512px) {
    width: 99%;
  }
`;

export const CardHeader = styled.section`
  h1 {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 2rem;
  }

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.2rem;
  }
`;

export const CardBody = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  input {
    border: 1px solid ${({ theme }) => theme.colors.textSecondary};
    border-radius: 5px;
    padding: 10px;
    font-size: 1.15rem;

    background-color: #e9ecef;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const CardFooter = styled.section`
  button {
    border: none;
    border-radius: 5px;
    padding: 10px;

    background-color: #3b5bdb;

    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
