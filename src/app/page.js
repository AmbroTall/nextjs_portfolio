import Image from "next/image";
import Button from "@/components/button/Button";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "LangChain",
  "LLM Integration",
  "AWS",
  "Docker",
];

const Page = () => {
  return (
    <div className="grid items-center gap-12 py-12 md:grid-cols-2 md:py-24">
      <div className="flex flex-col gap-6">
        <p className="text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">
          Software Engineer & AI/ML Integration Specialist
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          Building Tomorrow&apos;s World with AI-Powered Software
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          5+ years shipping full-stack applications and integrating LLM
          workflows, agentic automation, and vector search into production
          systems across healthcare, legal tech, and finance.
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-400"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button url="/portfolio" name="See my work" />
          <Button url="/resume" name="View resume" />
        </div>
      </div>
      <div className="relative mx-auto aspect-square w-full max-w-md">
        <Image src="/hero.png" alt="hero" priority fill className="object-contain" />
      </div>
    </div>
  );
};

export default Page;
