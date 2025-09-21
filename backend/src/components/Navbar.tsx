'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex gap-6">
        <li>
          <Link href="#home" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
