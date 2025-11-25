import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-zinc-900 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link href="/Posts" className="hover:text-zinc-300 transition-colors">
            My Project
          </Link>
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/home"
              className="hover:text-zinc-300 transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-zinc-300 transition-colors"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
