"use client";
import { useState } from "react";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import Image from "next/image";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Posts", href: "/blog/posts", icon: DocumentDuplicateIcon },
  { name: "About", href: "/blog/about", icon: UserGroupIcon },
  { name: "Contact", href: "/blog/contact", icon: EnvelopeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ✅ Sidebar for Large Screens (Fixed, No Background Issues) */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-white shadow-lg fixed left-0 top-0 z-50">
        <div className="flex flex-col items-center mt-6">
          <Image
            src="/blogzilla.svg"
            alt="Blogzilla Icon"
            width={70}
            height={70}
          />
          <h1 className="font-bold text-purple-800 text-xl mt-2">BLOGZILLA</h1>
        </div>

        <nav className="mt-8 px-4">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex items-center gap-3 p-3 rounded-md transition-all",
                  pathname === link.href
                    ? "bg-purple-200 text-black"
                    : "text-gray-800 hover:bg-purple-100"
                )}
              >
                <LinkIcon className="w-6 h-6 text-gray-700" />
                <p className="block text-lg">{link.name}</p>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ✅ Mobile Navbar (No Gray Background) */}
      <div className="md:hidden flex items-center justify-between bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50">
        <h1 className="font-bold text-purple-800 text-xl">BLOGZILLA</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <XMarkIcon className="w-7 h-7 text-gray-700" />
          ) : (
            <Bars3Icon className="w-7 h-7 text-gray-700" />
          )}
        </button>
      </div>

      {/* ✅ Mobile Dropdown Menu (No Gray Area) */}
      {isOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-white shadow-lg z-50 p-4">
          {links.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 p-3 rounded-md transition-all text-gray-800 hover:bg-purple-100"
                onClick={() => setIsOpen(false)}
              >
                <LinkIcon className="w-6 h-6 text-gray-700" />
                <p className="block text-lg">{link.name}</p>
              </Link>
            );
          })}
        </div>
      )}

      {/* ✅ Ensuring No Background Issues on Main Content */}
      <div className="md:ml-64 pt-14 min-h-screen bg-white">
        {/* Main content will go here */}
      </div>
    </>
  );
}
