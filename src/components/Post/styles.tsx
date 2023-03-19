import styled from 'styled-components';
import { FeedPostHeader } from '../Feed/FeedPost/styles';

export const PostContainer = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  margin: 35px auto 0 auto;

  width: 80%;

  @media (max-width: 768px) {
    padding: 10px;
    width: 100%;
  }
`;

export const PostHeader = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;

  width: 100%;

  > h1 {
    color: #fff;
    font-size: 2.1rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  span {
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

export const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 10px;

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;

    @media (max-width: 768px) {
      height: 35px;
      width: 35px;
    }
  }

  span {
    color: #fff;
    font-size: 1.3rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        color: #4790ff;
      }
    }
  }
`;

export const PostContent = styled.article`
  color: #dddddd;
  font-size: 1.35em;

  @media (max-width: 768px) {
    font-size: 1.2em;
  }

  a {
    color: #4790ff;
    text-decoration: none;
    font-weight: 600;
  }
`;
