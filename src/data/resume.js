export const title = "Software Engineer & AI/ML Integration Specialist";

export const summary =
  "Innovative and self-motivated full-stack software engineer with 5+ years of experience building scalable applications and integrating AI/ML workflows into production systems. Proficient in developing clean, efficient code, automating business workflows, and delivering end-to-end solutions across healthcare, legal tech, and finance domains. Strong expertise in LLM integration, agentic workflows, data annotation, and modern cloud architectures.";

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "AngularJS", "Vue3", "TypeScript", "HTML", "CSS", "Tailwind"],
  },
  {
    category: "Backend",
    skills: ["Python (Django, FastAPI, Flask)", "Node.js", "Express"],
  },
  {
    category: "AI & ML",
    skills: [
      "LangChain",
      "LLM Prompt Engineering",
      "OpenAI APIs",
      "HuggingFace",
      "Vector DBs",
      "Elasticsearch",
    ],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL", "MariaDB", "PostgreSQL"],
  },
  {
    category: "DevOps",
    skills: ["GitHub Actions", "Docker", "CI/CD", "AWS", "GCP"],
  },
  {
    category: "Tools",
    skills: ["Git", "WebSockets", "Celery", "Redis"],
  },
];

export const experience = [
  {
    role: "AI Model Evaluation & Training Data Engineer",
    company: "Turing Lab · AI Research Division",
    period: "April 2026 – Present",
    location: "Remote",
    summary:
      "Design and execute evaluation protocols for agentic AI systems on the OpenClaw SFT Trace Collection project, producing supervised fine-tuning datasets for next-generation model training.",
    bullets: [
      "Architect multi-turn task scenarios exercising agent tool-use across browser automation, scheduling, file operations, messaging, and API integrations",
      "Apply rubric-based quality scoring and step-level correctness labeling to agent trajectories, directly shaping model training signal",
      "Translate abstract task specifications into concrete, verifiable test scenarios grounded in realistic workspace context",
      "Enforce environment-state verification (not agent self-reporting) as the standard for validating task completion",
      "Maintain consistency and fidelity across multi-session evaluation workflows to maximize training signal quality",
    ],
  },
  {
    role: "Software Engineer",
    company: "United Legal Group",
    period: "February 2024 – July 2025",
    location: "Nairobi, Kenya",
    summary:
      "Developed a multi-tenant AI-driven CRM for debt collection agencies utilizing AWS, Django, and Vue3.",
    bullets: [
      "Designed and implemented LLM-powered automation workflows (LangChain + OpenAI) for generating personalized client communications",
      "Integrated vector search (ChromaDB) to match debtor profiles with contextual responses",
      "Built automation modules including AI-driven mail merge for customized SMTP templates",
      "Optimized database performance via indexing, reducing query response times by 35%",
      "Enhanced UI performance by 40% through modular component design and lazy loading",
      "Established end-to-end CI/CD pipelines with automated unit testing for reliability",
      "Authored RFCs and RCA documentation for AI feature rollouts and production bugs",
    ],
  },
  {
    role: "Software Engineer",
    company: "Savannah Informatics",
    period: "January 2022 – January 2024",
    location: "Nairobi, Kenya",
    summary:
      "Delivered e-health and fintech solutions powered by AI/ML models, enabling hospitals, insurers, and regulators to improve efficiency across Kenya's healthcare ecosystem.",
    bullets: [
      "Integrated LLMs with healthcare data to provide automated support for medical billing, claim explanations, and regulatory compliance",
      "Built ETIMS (KRA application) for healthcare provider tax compliance with AI-assisted form validation",
      "Deployed Elasticsearch + semantic search for enhanced patient and provider record retrieval",
      "Researched and implemented LangChain pipelines for structured document summarization and medical report generation",
      "Developed USSD patient registration flows integrated with AI-based triage recommendations",
      "Implemented Celery + ML task queues for appointment scheduling, predictive notifications, and automated reporting",
      "Led deployment of solutions on AWS and GCP ensuring high availability and scalability",
      "Integrated WebSockets with AI notifications for real-time communication between healthcare providers and payors",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "DoWell Research",
    period: "March 2020 – February 2022",
    location: "Nairobi, Kenya",
    summary:
      "Led a team of 5 engineers building AI-assisted operational tools and the Scales product integration.",
    bullets: [
      "Integrated Workflow AI to automate HR processes, performance reviews, and project access management",
      "Developed scalable backend services using Django/Python and Express with React/MongoDB/SQL frontend",
      "Delivered AI-driven dashboards for data analytics and decision-making insights",
      "Led seamless product integration ensuring accurate report collection and workflow automation",
    ],
  },
  {
    role: "Software Developer",
    company: "Innovex Solutions",
    period: "September 2019 – March 2020",
    location: "Kenya",
    summary:
      "Enhanced software products for 8+ insurance companies with focus on digitization and automation.",
    bullets: [
      "Digitized vehicle accident claim processes with AI-supported fraud detection capabilities",
      "Developed supplier management systems with automated matching and recommendation features",
      "Built full-stack solutions using React, Next.js, Node.js, Express, and MariaDB",
    ],
  },
];

export const earlyCareer = [
  {
    role: "Software Developer Intern",
    company: "Real Biz Digital",
    period: "April 2018 – June 2018",
    location: "Nairobi, Kenya",
    bullets: [
      "Mastered multiple programming languages through structured learning programs",
      "Analyzed websites to identify optimization opportunities and performance bottlenecks",
    ],
  },
  {
    role: "IT Specialist",
    company: "Parliamentary Service Commission",
    period: "January 2018 – March 2018",
    location: "Nairobi, Kenya",
    bullets: [
      "Developed e-board application using Django, HTML, CSS, and JavaScript for digital meeting scheduling",
      "Managed Parliamentary congress systems and resolved network/printer infrastructure issues",
    ],
  },
];

export const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "Laikipia University",
  period: "2017 – 2021",
};

export const coreCompetencies = [
  "Full-Stack Development",
  "AI/ML Integration & LLM Workflows",
  "AI Data Annotation & SFT Trajectory Collection",
  "Cloud Deployment & Scalability",
  "Automated Testing & CI/CD",
  "Vector Databases & Semantic Search",
  "Team Leadership & Project Management",
  "Agile Development & Collaboration",
];
