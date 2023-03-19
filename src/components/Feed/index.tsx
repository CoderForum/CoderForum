'use client';

import FeedPost from './FeedPost';
import { FeedContainer } from './styles';

export default function Feed() {
  return (
    <FeedContainer>
      <h1>Feed</h1>

      <FeedPost />
    </FeedContainer>
  );
}
