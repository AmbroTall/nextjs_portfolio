import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 py-8 text-sm text-neutral-600 sm:flex-row dark:border-neutral-800 dark:text-neutral-400">
      <div>
        © {new Date().getFullYear()}{" "}
        <a
          href="mailto:ambrosetall@gmail.com"
          className="hover:text-neutral-900 dark:hover:text-white"
        >
          Ambrose Mbithi
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="https://www.linkedin.com/in/ambrose-mbithi-963849214/"
          target="_blank"
          aria-label="LinkedIn"
          className="hover:text-neutral-900 dark:hover:text-white"
        >
          <FaLinkedin size={18} />
        </Link>
        <Link
          href="https://github.com/AmbroTall"
          target="_blank"
          aria-label="GitHub"
          className="hover:text-neutral-900 dark:hover:text-white"
        >
          <FaGithub size={18} />
        </Link>
        <a
          href="mailto:ambrosetall@gmail.com"
          aria-label="Email"
          className="hover:text-neutral-900 dark:hover:text-white"
        >
          <FaEnvelope size={18} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
