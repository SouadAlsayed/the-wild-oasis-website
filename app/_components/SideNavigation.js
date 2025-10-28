"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  return (
    <nav className="relative z-20">
      {/* Toggle button for mobile */}
      <button
        className="absolute z-20 top-[-34px] left-[-3px] md:hidden h-6 w-6"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? (
          <ChevronLeftIcon className="h-6 w-6 text-primary-100" />
        ) : (
          <ChevronRightIcon className="h-6 w-6 text-primary-100" />
        )}
      </button>

      {/* Navigation menu */}
      <ul
        className={`fixed top-32 left-0 h-full w-2/3 sm:w-1/2  bg-primary-950 border-r border-primary-900 
          flex flex-col gap-2 text-lg p-6 transition-transform duration-300 md:static md:w-auto md:p-0 md:bg-transparent md:border-none md:flex
          ${menuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${
                pathname === link.href ? "bg-primary-900" : ""
              }`}
              href={link.href}
              onClick={() => setMenuOpen(false)} // close menu after navigation
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
