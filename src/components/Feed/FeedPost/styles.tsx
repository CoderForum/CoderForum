import styled from 'styled-components';

export const FeedPostContainer = styled.article`
  display: flex;
  flex-direction: column;

  gap: 5px;

  min-width: 300px;
  max-width: 700px;

  * {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  a {
    text-decoration: none;
  }
`;

export const FeedPostHeader = styled.div`
  p {
    font-size: 1.35rem;
    font-weight: bold;

    a:hover {
      text-decoration: underline;
    }
  }
`;

export const FeedPostFooter = styled.div`
  display: flex;

  * {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  span {
    font-size: 1rem;
    margin-right: 5px;

    &:not(:last-child)::after {
      content: '•';
      margin-left: 5px;
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    a:hover {
      color: #1864ab;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    span {
      margin-bottom: 5px;
    }
  }
`;