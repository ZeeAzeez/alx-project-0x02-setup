// pages/posts.tsx
import React from "react";
import PostCard from "@/components/common/PostCard";
import { Post } from "@/interfaces";

interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
        Posts
      </h1>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.body}
          userId={post.userId}
        />
      ))}
    </main>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default PostsPage;
