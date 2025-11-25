import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { type Post } from "@/interfaces";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (title: string, content: string) => {
    const newPost: Post = {
      id: Date.now(),
      title,
      body: content,
      userId: 1,
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <Header />
      <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Home Page
      </h1>
      <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
        Welcome to the Home page!
      </p>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-12 rounded-md bg-blue-600 px-6 py-3 text-white font-semibold transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Add New Post
      </button>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {posts.length > 0 && (
        <div className="mb-12 w-full max-w-5xl">
          <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Your Posts
          </h2>
          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post.id} title={post.title} content={post.body} />
            ))}
          </div>
        </div>
      )}

      <div className="w-full max-w-5xl">
        <h2 className="mb-6 text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Sample Cards
        </h2>
        <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card
            title="Welcome"
            content="This is a dynamic card component that accepts props for title and content. It's reusable and styled with Tailwind CSS."
          />
          <Card
            title="Features"
            content="The Card component is built with TypeScript interfaces, ensuring type safety and better developer experience."
          />
          <Card
            title="Reusable"
            content="You can use this Card component anywhere in your application by simply passing different props."
          />
          <Card
            title="Modern Design"
            content="Cards feature responsive design with hover effects and support for both light and dark modes."
          />
          <Card
            title="Type Safe"
            content="Using TypeScript interfaces ensures that the component receives the correct prop types at compile time."
          />
          <Card
            title="Easy to Use"
            content="Simply import the Card component and pass title and content props to create beautiful card layouts."
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
