import Link from 'next/link';
import { useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FeedPostFooter } from '../Feed/FeedPost/styles';
import {
  PostAuthor,
  PostContainer,
  PostContent,
  PostHeader,
  PostSocial,
} from './styles';

export type PostProps = {
  author: {
    username: string;
  };
  comments: number;
  createdAt: number;
  hasUpvoted: boolean;
  title: string;
  upvotes: number;
  url: string;
};

const Loader = (
  <ContentLoader
    backgroundColor="#7e7e7ec5"
    foregroundColor="#d1d1d1b0"
    speed={2}
    style={{ borderRadius: '5px', height: '40px', width: '100%' }}
  >
    <rect height="40px" rx="0" ry="0" width="100%" />
  </ContentLoader>
);

const Article = (
  <ContentLoader
  backgroundColor="#7e7e7ec5"
  foregroundColor="#d1d1d1b0"
    style={{ borderRadius: '5px', height: '360px', width: '100%' }}
  >
    <rect height="20" rx="4" ry="4" width="100%" x="0" y="13" />
    <rect height="20" rx="4" ry="4" width="70%" x="0" y="45" />
    <rect height="20" rx="4" ry="4" width="100%" x="0" y="77" />
    <rect height="20" rx="4" ry="4" width="100%" x="0" y="109" />
    <rect height="20" rx="4" ry="4" width="40%" x="0" y="141" />
  </ContentLoader>
);

export default function Post({
  author,
  comments,
  createdAt,
  hasUpvoted,
  title,
  upvotes,
  url,
}: PostProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2_000);
  }, []);

  return (
    <PostContainer>
      <PostHeader>
        <h1>{loaded ? title : Loader}</h1>

        <FeedPostFooter>
          <span>{upvotes} votos</span>
          <span>{comments} comentários</span>
          <span>há 1 hora</span>
        </FeedPostFooter>

        <PostAuthor>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Avatar" src="https://i.pravatar.cc/150?img=1" />
          <span>
            Escrito por:{' '}
            <Link href={`/${author.username}`}>{author.username}</Link>
          </span>
        </PostAuthor>
      </PostHeader>

      <PostContent>
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        praesentium iste porro cumque quo asperiores debitis eligendi modi
        placeat autem, necessitatibus maxime voluptates laboriosam voluptatibus
        dolorem dignissimos distinctio doloribus recusandae! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Amet dolores quis cumque autem
        quasi, voluptas facilis in quos animi atque minima deleniti consequuntur
        impedit iste nihil illum fugit sed reiciendis. */}
        {Article}
      </PostContent>

      <PostSocial>
        <div className="likes">
          {hasUpvoted ? <AiFillHeart /> : <AiOutlineHeart />}
          <span>{upvotes}</span>
        </div>

        <span>{comments} comentários</span>
      </PostSocial>
    </PostContainer>
  );
}
