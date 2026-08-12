"use client";

import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const toggle = () => {
  const isDark = document.documentElement.classList.contains("dark");
  document.documentElement.classList.toggle("dark", !isDark);
  window.localStorage.setItem("theme", !isDark ? "dark" : "light");
};

const Darkmode = () => {
  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500"
    >
      <FaSun size={14} className="hidden dark:block" />
      <FaMoon size={14} className="block dark:hidden" />
    </button>
  );
};

export default Darkmode;
