import Link from "next/link";

const categories = [
  { name: "Templates", url: "/portfolio/designs" },
  { name: "Websites", url: "/portfolio/websites" },
  { name: "Contributions", url: "/portfolio/contributions" },
];

const Portfolio = () => {
  return (
    <div>
      <h2 className="mb-6 text-lg text-neutral-600 dark:text-neutral-400">
        Choose a gallery
      </h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.url}
            href={category.url}
            className="flex items-center justify-center rounded-2xl border border-neutral-200 px-6 py-16 text-lg font-semibold transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
