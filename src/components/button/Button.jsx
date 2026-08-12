import Link from "next/link";
import React from "react";

const Button = ({ url, name }) => {
  return (
    <Link href={url}>
      <button className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
        {name}
      </button>
    </Link>
  );
};

export default Button;
