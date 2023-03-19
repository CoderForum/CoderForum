import styled from 'styled-components';

export const FeedContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;

  width: 100%;

  .posts {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;
