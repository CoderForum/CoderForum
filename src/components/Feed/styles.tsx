import styled from 'styled-components';

export const FeedContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  padding-top: 35px;

  > h1 {
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }

  .posts {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
