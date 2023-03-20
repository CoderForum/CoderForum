'use client';

import FeedPost from './FeedPost';
import { FeedContainer } from './styles';

export default function Feed() {
  return (
    <FeedContainer>
      <h1>Feed</h1>

      <div className="posts">
        <FeedPost
          author={{ username: 'johndoe' }}
          comments={0}
          createdAt={0}
          hasUpvoted={false}
          title="Vercel cria própria fonte para uso livre: Vercel Sans"
          upvotes={0}
          url="/posts/vercel-cria-propria-fonte-para-uso-livre-vercel-sans"
        />
        <FeedPost
          author={{ username: 'davipatricio' }}
          comments={15}
          createdAt={0}
          hasUpvoted={false}
          title="OpenAI lança GPT-4"
          upvotes={22}
          url="/posts/openai-lanca-gpt4"
        />
        <FeedPost
          author={{ username: 'clyde' }}
          comments={5}
          createdAt={0}
          hasUpvoted={false}
          title="Discord integra Inteligência Artificial ao chat"
          upvotes={10}
          url="/posts/discord-integra-inteligencia-artificial-ao-chat"
        />
      </div>
    </FeedContainer>
  );
}
