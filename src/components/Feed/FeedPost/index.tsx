import Link from 'next/link';
import type { PostResponse } from '@/components/Post';
import { FeedPostContainer, FeedPostFooter, FeedPostHeader } from './styles';

export default function FeedPost({
  author,
  comments,
  createdAt,
  title,
  upvotes,
  url,
}: PostResponse) {
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
