import styled from 'styled-components';

export const FeedContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15px;

  margin: 35px auto 0 auto;

  width: 80%;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 0;
    width: 100%;
  }

  > h1 {
    color: #fff;
  }

  .posts {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
