import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400">{content}</p>
    </div>
  );
};

export default Card;
