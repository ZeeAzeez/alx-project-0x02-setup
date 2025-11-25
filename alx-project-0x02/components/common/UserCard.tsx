import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
}) => {
  return (
    <div className="mb-4 rounded-lg border border-zinc-200 p-4 shadow-sm dark:border-zinc-800">
      <h2 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {name} (@{username})
      </h2>
      <p className="mb-1 text-sm text-zinc-600 dark:text-zinc-400">ID: {id}</p>
      <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
        Email: {email}
      </p>
      <div className="mt-2 border-t border-zinc-200 pt-2 dark:border-zinc-700">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Address:
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {address.street}, {address.suite}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
