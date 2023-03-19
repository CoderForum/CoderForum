'use client';

import Post from '@/components/Post';

type PostProps = {
  params: { postId: string };
};

export default function PostPage({ params }: PostProps) {
  const postId = params.postId;

  return (
    <Post
      author={{ username: 'test' }}
      comments={0}
      createdAt={0}
      title="OpenAI lança GPT-3, uma IA capaz de escrever textos como humanos"
      upvotes={0}
      url="test"

    />
  );
}
