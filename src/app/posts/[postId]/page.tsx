'use client';

import Post from '@/components/Post';

type PostProps = {
  params: { postId: string };
};

export default function PostPage({ params }: PostProps) {
  const postId = params.postId;

  return (
    <Post
      id={postId}
    />
  );
}
