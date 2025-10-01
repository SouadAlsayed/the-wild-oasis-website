"use client";

import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    /* Desktop */
    <nav className="z-10 text-xl">
      <ul className="hidden sm:flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        </li>
      </ul>

      {/* Mobile */}
      <button
        className="sm:hidden h-8 w-8"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <XMarkIcon className="h-8 w-8 text-primary-100" />
        ) : (
          <Bars3CenterLeftIcon className="h-8 w-8 text-primary-100" />
        )}
      </button>
      {menuOpen && (
        <div
          className="border-b border-primary-900 fixed top-[100px] right-0 w-full py-8 bg-primary-950 
            flex flex-col items-center justify-center gap-2 sm:hidden shadow-md z-100"
        >
          <Link
            href="/cabins"
            className="flex justify-center w-full py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors font-semibold text-primary-200"
          >
            Cabins
          </Link>

          <Link
            href="/about"
            className="flex justify-center w-full py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors font-semibold text-primary-200"
          >
            About
          </Link>

          <Link
            href="/account"
            className="flex justify-center w-full py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors font-semibold text-primary-200"
          >
            Guest area
          </Link>
        </div>
      )}
    </nav>
  );
}
