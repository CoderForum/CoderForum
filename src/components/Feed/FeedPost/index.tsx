import Link from 'next/link';
import { FeedPostContainer, FeedPostFooter, FeedPostHeader } from './styles';

type FeedPostProps = {
  author: {
    username: string;
  };
  comments: number;
  createdAt: number;
  title: string;
  upvotes: number;
  url: string;
};

export default function FeedPost({
  author,
  comments,
  createdAt,
  title,
  upvotes,
  url,
}: FeedPostProps) {
  return (
    <FeedPostContainer>
      
      <FeedPostHeader>
        <p>
          <Link href={url}>{title.slice(0, 120)}</Link>
        </p>
      </FeedPostHeader>

      <FeedPostFooter>
        <span>{upvotes} votos</span>
        <span>{comments} comentários</span>
        <span>
          <Link href={`/${author.username}`}>{author.username}</Link>
        </span>
        <span>há 1 hora</span>
      </FeedPostFooter>

    </FeedPostContainer>
  );
}
