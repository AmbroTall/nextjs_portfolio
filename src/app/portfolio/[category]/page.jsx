import Image from "next/image";
import Link from "next/link";
import { projects } from "../projects";

const Category = async ({ params }) => {
  const { category } = await params;
  const projo = projects.filter((x) => x.category === category);

  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold tracking-tight">
        {category === "contributions" ? "Corporate Projects" : category}
      </h1>

      <div className="flex flex-col gap-10">
        {projo.map((item) => (
          <div
            key={item.id}
            className="grid gap-6 sm:grid-cols-[1fr_1.2fr] sm:items-center"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.desc}
              </p>
              <Link target="_blank" href={item.link} className="w-fit">
                <button className="rounded-full bg-neutral-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
                  Go to site
                </button>
              </Link>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <Image
                src={item.image}
                fill
                className="object-cover"
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
