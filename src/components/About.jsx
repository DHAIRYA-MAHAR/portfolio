export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white px-4 py-20 transition-colors dark:bg-slate-950/60 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-indigo-300">
            About Me
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
            B.Tech CSE student passionate about data and machine learning.
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            I&apos;m currently pursuing B.Tech in Computer Science and Engineering at
            Lovely Professional University. I enjoy solving real-world problems using
            data analysis, machine learning algorithms, and deep diving into analytics
            to build data-driven applications.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
            My interests lie in data science, predictive modeling, and analyzing
            trends. I regularly explore new libraries in the Python ecosystem
            and sharpen my problem‑solving skills through hands-on practice and
            projects.
          </p>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">University</p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                Lovely Professional University
              </p>
              <p className="mt-1 text-xs text-blue-600 dark:text-slate-400">CGPA: 7.19</p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Degree</p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                B.Tech Computer Science & Engineering
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Primary Skills
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">
                Data Science, Python, ML
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900/70 dark:shadow-slate-900/60">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Location</p>
              <p className="mt-1 text-sm font-medium text-slate-900 dark:text-slate-100">India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

