import ClapButton from "@/components/ClapButton";
import { delay } from "@/lib/utils";
import { BlogPost, BlogPostsResponse } from "@/models/BlogPost";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";

interface BlogPostPageProps {
  params: { postId: string };
}

export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/posts");
  const { posts }: BlogPostsResponse = await response.json();

  return posts.map(({ id }) => id);
}

export async function generateMetadata({
  params: { postId },
}: BlogPostPageProps): Promise<Metadata> {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const post = await response.json();

  return {
    title: post.title,
    description: post.body,
    openGraph: {
      title: post.title,
      description: post.body,
      images: [
        {
          url: `/generatePostsImage/${postId}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params: { postId },
}: BlogPostPageProps) {
  const response = await fetch(`https://dummyjson.com/posts/${postId}`);
  const { title, body }: BlogPost = await response.json();

  if (response.status === 404) {
    notFound();
  }

  await delay(1000);

  return (
    <article className="max-w-prose m-auto space-y-5">
      <h1 className="text-3xl text-center font-bold">{title}</h1>
      <p className="text-lg">{body}</p>
      <ClapButton />
    </article>
  );
}
