import { useMemo, useState } from 'react';

import alumniImg from '../assets/images/projects/alumni.png';
import marketingImg from '../assets/images/projects/marketing.svg';
import affirmationImg from '../assets/images/projects/affirmation.svg';
import cpuImg from '../assets/images/projects/cpu.svg';

const allProjects = [
  {
    id: 1,
    title: 'Real Estate Dashboard',
    short: 'Power BI Dashboard',
    description:
      'Developed interactive Power BI dashboard analyzing property trends across multiple cities. Designed KPI metrics, applied DAX and Power Query for efficient data cleaning.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
    type: 'data',
    github: 'https://github.com/DHAIRYA-MAHAR/powerbi_project',
    image: alumniImg,
    demo: null,
  },
  {
    id: 2,
    title: 'Energy Consumption Classifier',
    short: 'ML Classification Model',
    description:
      'Analyzed household energy-usage data to classify consumption. Applied Logistic Regression, Random Forest, and Gradient Boosting. Achieved F1-score of ~0.87 with Random Forest.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    type: 'data',
    github: 'https://github.com/Harshporwal0904/MLProject',
    image: marketingImg,
    demo: null,
  },
  {
    id: 3,
    title: 'Crash Reporting Analysis & Visualization',
    short: 'EDA on crash records',
    description:
      'Preprocessed 10,000+ crash records by cleaning missing values. Performed EDA to uncover patterns in crash timing, frequency, and demographic factors for road-safety improvements.',
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    type: 'data',
    github: 'https://github.com/DHAIRYA-MAHAR/Crash-Reporting-dataset',
    image: affirmationImg,
    demo: null,
  },
  {
    id: 4,
    title: 'Smart Service Booking System',
    short: 'Django Service Portal',
    description:
      'A Django-based web application for browsing services and booking appointments. Includes an admin panel for managing users, services, and scheduling.',
    tech: ['Django', 'Python', 'HTML/CSS', 'JavaScript'],
    type: 'fullstack',
    github: 'https://github.com/DHAIRYA-MAHAR/E_Commerce',
    image: cpuImg,
    demo: null,
  },
  {
    id: 5,
    title: 'Campus Management System',
    short: 'Academic ERP Solution',
    description:
      'A comprehensive ERP system for managing academic records, student profiles, and administrative tasks using the Django framework.',
    tech: ['Django', 'Python', 'PostgreSQL', 'HTML/CSS'],
    type: 'fullstack',
    github: 'https://github.com/DHAIRYA-MAHAR/campus-management-system',
    image: alumniImg,
    demo: null,
  },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'data', label: 'Data & ML' },
  { id: 'fullstack', label: 'Full-Stack' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = useMemo(() => {
    if (activeFilter === 'all') return allProjects;
    return allProjects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="scroll-mt-24 bg-slate-50 px-4 py-20 transition-colors dark:bg-slate-950/70 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-indigo-300">
            Projects
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Featured Projects
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Projects I’ve built across data analysis, machine learning, and visualization tools.
          </p>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-md shadow-blue-500/25'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-500/70 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-200 dark:hover:border-indigo-500/70'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent pointer-events-none dark:from-slate-950 dark:via-slate-950/70" />
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent pointer-events-none dark:from-slate-950 dark:via-slate-950/70" />

          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700/80">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group flex min-w-[260px] max-w-xs flex-col snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100 transition hover:translate-x-2 hover:-translate-y-1 hover:border-blue-500/80 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/60 dark:ring-0 dark:shadow-slate-900/80 dark:hover:border-indigo-500/80 dark:hover:shadow-glow"
              >
                <div className="relative h-36 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:translate-x-2"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate text-[11px] font-medium uppercase tracking-[0.18em] text-slate-200/80">
                        {project.short}
                      </p>
                      <h3 className="truncate text-sm font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="shrink-0 rounded-full bg-slate-950/70 px-2 py-0.5 text-[10px] font-medium text-slate-100 ring-1 ring-slate-700/70">
                      {project.type === 'data'
                        ? 'Data & ML'
                        : project.type === 'fullstack'
                        ? 'Full-Stack'
                        : 'Project'}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="mb-3 text-xs text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-600 ring-1 ring-blue-500/10 dark:bg-slate-800/80 dark:text-sky-300 dark:ring-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-blue-500/80 dark:border-slate-700 dark:bg-slate-950/70 dark:text-slate-100 dark:hover:border-indigo-500/80"
                    >
                      GitHub
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:brightness-110"
                      >
                        Live Demo
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-400">
                        Demo soon
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

