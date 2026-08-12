"use client";
import Link from "next/link";
import React, { useState } from "react";
import Darkmode from "../darkMode/page";
import { FaBars, FaTimes } from "react-icons/fa";

const navlinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Portfolio", url: "/portfolio" },
  { id: 3, name: "Resume", url: "/resume" },
  { id: 4, name: "About", url: "/about" },
  { id: 5, name: "Contact", url: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between py-6">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        Ambrose
      </Link>

      <div className="hidden items-center gap-8 md:flex">
        {navlinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
          >
            {link.name}
          </Link>
        ))}
        <Darkmode />
      </div>

      <div className="flex items-center gap-4 md:hidden">
        <Darkmode />
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {open && (
        <div className="absolute inset-x-0 top-20 z-50 flex flex-col gap-1 border-b border-neutral-200 bg-white px-6 py-4 md:hidden dark:border-neutral-800 dark:bg-neutral-950">
          {navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-900"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
