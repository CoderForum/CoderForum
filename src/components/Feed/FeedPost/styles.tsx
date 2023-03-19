import styled from 'styled-components';

export const FeedPostContainer = styled.article`
  display: flex;
  flex-direction: column;

  gap: 10px;

  padding: 10px;

  min-width: 300px;
  max-width: 700px;

  * {
    color: #000;
  }

  a {
    text-decoration: none;
  }
`;

export const FeedPostHeader = styled.div`
  p {
    font-size: 1.25rem;
    font-weight: bold;

    a:hover {
      text-decoration: underline;
    }
  }
`;

export const FeedPostFooter = styled.div`
  display: flex;

  @media (max-width: 768px) {
    gap: 5px;
    flex-wrap: wrap;
  }

  * {
    color: #495057;
  }

  span {
    font-size: 0.9rem;

    /* add a dot between span elements but not into the last one */
    &:not(:last-child)::after {
      content: '•';
      margin: 0 5px;
    }

    a:hover {
      color: #1864ab;
    }
  }
`;
