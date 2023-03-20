import Link from 'next/link';
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

export default function Post({
  author,
  comments,
  createdAt,
  hasUpvoted,
  title,
  upvotes,
  url,
}: PostProps) {
  return (
    <PostContainer>
      <PostHeader>
        <h1>{title}</h1>

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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
        praesentium iste porro cumque quo asperiores debitis eligendi modi
        placeat autem, necessitatibus maxime voluptates laboriosam voluptatibus
        dolorem dignissimos distinctio doloribus recusandae! Lorem, ipsum dolor
        sit amet consectetur adipisicing elit. Amet dolores quis cumque autem
        quasi, voluptas facilis in quos animi atque minima deleniti consequuntur
        impedit iste nihil illum fugit sed reiciendis.
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
