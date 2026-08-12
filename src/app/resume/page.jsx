import {
  title,
  summary,
  skillGroups,
  experience,
  earlyCareer,
  education,
  coreCompetencies,
} from "@/data/resume";

export const metadata = {
  title: "Resume — Ambrose Mbithi",
};

const ExperienceItem = ({ item }) => (
  <div className="border-l-2 border-neutral-200 pl-6 dark:border-neutral-800">
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 className="text-lg font-semibold">{item.role}</h3>
      <span className="text-sm text-neutral-500 dark:text-neutral-500">
        {item.period}
      </span>
    </div>
    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
      {item.company} {item.location ? `· ${item.location}` : ""}
    </p>
    {item.summary && (
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
        {item.summary}
      </p>
    )}
    <ul className="mt-3 flex flex-col gap-1.5">
      {item.bullets.map((bullet) => (
        <li
          key={bullet}
          className="text-sm text-neutral-600 marker:text-neutral-400 list-disc ml-4 dark:text-neutral-400"
        >
          {bullet}
        </li>
      ))}
    </ul>
  </div>
);

const Resume = () => {
  return (
    <div className="flex flex-col gap-16 py-12">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight">Ambrose Mbithi</h1>
        <p className="text-sm font-medium tracking-wide text-emerald-600 dark:text-emerald-400">
          {title}
        </p>
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
          {summary}
        </p>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Technical skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      <div>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Professional experience
        </h2>
        <div className="flex flex-col gap-10">
          {experience.map((item) => (
            <ExperienceItem key={item.role + item.company} item={item} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Early career &amp; internships
        </h2>
        <div className="flex flex-col gap-10">
          {earlyCareer.map((item) => (
            <ExperienceItem key={item.role + item.company} item={item} />
          ))}
        </div>
      </div>

      <div className="grid gap-16 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight">Education</h2>
          <h3 className="text-lg font-semibold">{education.degree}</h3>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {education.school}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            {education.period}
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Core competencies
          </h2>
          <ul className="flex flex-col gap-1.5">
            {coreCompetencies.map((item) => (
              <li
                key={item}
                className="text-sm text-neutral-600 marker:text-neutral-400 list-disc ml-4 dark:text-neutral-400"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-sm text-neutral-500 dark:text-neutral-500">
        References available on request.
      </p>
    </div>
  );
};

export default Resume;
