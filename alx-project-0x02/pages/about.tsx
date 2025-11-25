import Button from "@/components/common/Button";
import React from "react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        About Page
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Learn more about our project on this page!
      </p>

      <div>
        <Button
          type="button"
          size="small"
          shape="rounded-full"
          className="bg-blue-500"
          onClick={() => alert("Button clicked!")}
        >
          Click Me
        </Button>
      </div>
    </div>
  );
};

export default About;
