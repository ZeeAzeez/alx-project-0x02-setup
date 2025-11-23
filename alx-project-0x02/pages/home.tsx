import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-8">
      <h1 className="mb-8 text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Home Page
      </h1>
      <p className="mb-12 text-lg text-zinc-600 dark:text-zinc-400">
        Welcome to the Home page!
      </p>

      <div className="grid w-full max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default Home;
