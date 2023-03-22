import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import ContentLoader from 'react-content-loader';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import useSWR from 'swr';
import { FeedPostFooter } from '../Feed/FeedPost/styles';
import { ArticleSkeleton, TitleSkeleton } from './skeletons';
import {
  PostAuthor,
  PostContainer,
  PostContent,
  PostHeader,
  PostSocial,
} from './styles';

export type PostResponse = {
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

const fetcher = async (url: string) =>
  // eslint-disable-next-line promise/prefer-await-to-then
  fetch(url).then(async (res) => res.json());

export default function Post({ id }: { id: string }) {
  const { data, error } = useSWR<PostResponse>(
    `/api/posts/${id}`,
    fetcher
  );

  if (error) {
    // notFound();
  }

  return (
    <PostContainer>
      <PostHeader>
        <h1>{data?.title ?? <TitleSkeleton />}</h1>

        <FeedPostFooter>
          <span>{data?.upvotes ?? '-'} votos</span>
          <span>{data?.comments ?? '-'} comentários</span>
          <span>há 1 hora</span>
        </FeedPostFooter>

        <PostAuthor>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt="Avatar"
            decoding="async"
            loading="lazy"
            src="https://i.pravatar.cc/150?img=1"
          />
          <span>
            Escrito por:{' '}
            <Link href={`/${data?.author.username ?? ''}`}>
              {data?.author.username ?? '...'}
            </Link>
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
        <ArticleSkeleton />
      </PostContent>

      <PostSocial>
        <div className="likes">
          {data?.hasUpvoted ? <AiFillHeart /> : <AiOutlineHeart />}
          <span>{data?.upvotes ?? '-'}</span>
        </div>

        <span>{data?.comments ?? '-'} comentários</span>
      </PostSocial>
    </PostContainer>
  );
}
