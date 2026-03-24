const skills = [
  { name: 'C', icon: 'devicon-c-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'HTML', icon: 'devicon-html5-plain colored' },
  { name: 'SQL', icon: 'devicon-mysql-plain colored' },
  { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
  { name: 'Pandas', icon: 'devicon-pandas-plain colored' },
  { name: 'Matplotlib', icon: 'devicon-python-plain colored' },
  { name: 'Seaborn', icon: 'devicon-python-plain colored' },
  { name: 'Canva', icon: 'devicon-canva-original colored' },
  { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
  { name: 'Jupyter', icon: 'devicon-jupyter-plain colored' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-white px-4 py-20 transition-colors dark:bg-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-indigo-300">
            Skills
          </p>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Technologies I work with
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            A snapshot of the languages, frameworks, and tools I use to build full‑stack
            web applications and solve real‑world problems.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-slate-900/70">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex min-w-[110px] max-w-[150px] flex-col items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 text-center text-xs text-slate-700 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/80 hover:shadow-lg hover:shadow-blue-500/20 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200 dark:shadow-slate-950/70 dark:hover:border-indigo-500/80 dark:hover:shadow-indigo-500/40"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 transition group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(37,99,235,0.3)] dark:bg-slate-900/90 dark:group-hover:bg-slate-900 dark:group-hover:shadow-[0_0_25px_rgba(129,140,248,0.7)]">
                  <i className={`${skill.icon} text-[22px]`} aria-hidden="true" />
                </div>
                <span className="font-medium text-[11px]">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

