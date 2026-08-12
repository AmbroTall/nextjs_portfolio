import Image from "next/image";
import Button from "@/components/button/Button";
import { summary, skillGroups, title } from "@/data/resume";

const About = () => {
  return (
    <div className="flex flex-col gap-16 py-12">
      <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-center">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src="/ambro.jpeg"
            fill
            alt="Ambrose Mbithi"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">
            {title}
          </p>
          <h1 className="text-3xl font-bold tracking-tight">Who am I?</h1>
          <p className="text-neutral-600 dark:text-neutral-400">{summary}</p>
          <div>
            <Button url="/resume" name="View full resume" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Technical skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-3 text-sm font-semibold text-neutral-500 dark:text-neutral-500">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
