import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="mb-4 rounded-lg border border-zinc-200 p-4 shadow-sm dark:border-zinc-800">
      <p className="mb-1 text-xs text-zinc-500">User ID: {userId}</p>
      <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">{content}</p>
    </div>
  );
};

export default PostCard;
